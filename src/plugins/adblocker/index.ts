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

let adblockerService: AdBlockerService | null = null;

export default createPlugin({
  name: () => t('plugins.adblocker.name'),
  description: () => t('plugins.adblocker.description'),
  restartNeeded: true,
  config: {
    enabled: true,
    cache: true,
    enableYoutubeSpecificBlocking: true, // Defaults to strongest blocking
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
    ];
  },


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
      
      await import('@ghostery/adblocker-electron-preload');
      
      if (config.enableYoutubeSpecificBlocking && !isInjected()) {
        inject(contextBridge);
        await webFrame.executeJavaScript(this.script);
      }
    },
  },
});