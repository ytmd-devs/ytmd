import { contextBridge, webFrame } from 'electron';
import { createPlugin } from '@/utils';
import { AdBlockerService } from './adblocker.service';
import { inject, isInjected } from './injectors/inject';
import { t } from '@/i18n';

interface AdblockerConfig {
  enabled: boolean;
  cache: boolean;
  enableYoutubeSpecificBlocking: boolean;
  additionalBlockLists: string[];
  disableDefaultLists: boolean;
}

// Global instance of our service
let adblockerService: AdBlockerService | null = null;

export default createPlugin({
  name: () => t('plugins.adblocker.name'),
  description: () => t('plugins.adblocker.description'),
  restartNeeded: true, // Recommended to set to true after these changes
  config: {
    enabled: true,
    cache: true,
    enableYoutubeSpecificBlocking: true, // Default to the strongest blocking
    additionalBlockLists: [],
    disableDefaultLists: false,
  } as AdblockerConfig,
    menu: async ({ getConfig, setConfig }) => {
    const config = await getConfig();

    return [
      {
        label: t('plugins.adblocker.menu.enableYoutubeSpecificBlocking'), // New string key
        type: 'checkbox',
        checked: config.enableYoutubeSpecificBlocking,
        click(item) {
          setConfig({ enableYoutubeSpecificBlocking: item.checked });
        },
      },
      // You could add future options here, like a button to clear the adblocker cache
    ];
  },
  
  // No longer needed - speedup is a less effective fallback
  // renderer: { ... }

  backend: {
    async start({ getConfig, window }) {
      const config = await getConfig();
      if (config.enabled) {
        if (!adblockerService) {
          adblockerService = new AdBlockerService(window.webContents.session);
        }
        await adblockerService.start(config);
      }
    },
    async stop() {
      if (adblockerService) {
        await adblockerService.stop();
        adblockerService = null;
      }
    },
    async onConfigChange(newConfig) {
      if (!adblockerService) return;

      if (newConfig.enabled) {
        // The service's start method handles re-configuration
        await adblockerService.start(newConfig);
      } else {
        await adblockerService.stop();
      }
    },
  },

  preload: {
    // This script now handles both Ghostery's advanced features and our YT injection
    script: `
      // Inject the YouTube-specific ad pruner
      const _prunerFn = window._pruner;
      if (typeof _prunerFn === 'function') {
        window._pruner = undefined;
        JSON.parse = new Proxy(JSON.parse, {
          apply(target, thisArg, args) {
            return _prunerFn(Reflect.apply(target, thisArg, args));
          },
        });
        Response.prototype.json = new Proxy(Response.prototype.json, {
          apply(target, thisArg, args) {
            return Reflect.apply(target, thisArg, args).then(o => _prunerFn(o));
          },
        });
      }
    `,
    async start({ getConfig }) {
      const config = await getConfig();
      if (!config.enabled) return;
      
      // ALWAYS enable Ghostery's preload for cosmetic filtering
      await import('@ghostery/adblocker-electron-preload');
      
      // Conditionally enable our powerful YouTube-specific injection
      if (config.enableYoutubeSpecificBlocking && !isInjected()) {
        inject(contextBridge);
        await webFrame.executeJavaScript(this.script);
      }
    },
    // The main plugin restart handles config changes for preload scripts
  },
});