import path from 'node:path';
import fs, { promises as fsPromises } from 'node:fs';
import { createHash } from 'node:crypto';
import { app, net, Session } from 'electron';
import { ElectronBlocker } from '@ghostery/adblocker-electron';
import { DEFAULT_BLOCKLISTS } from './lists.config';

const TWENTY_FOUR_HOURS_IN_MS = 24 * 60 * 60 * 1000;

export class AdBlockerService {
  private blocker: ElectronBlocker | undefined;
  private session: Session;
  private updateInterval: NodeJS.Timeout | undefined;
  private isRunning = false;

  constructor(session: Session) {
    this.session = session;
  }

  public async start(config: {
    cache: boolean;
    additionalBlockLists: string[];
    disableDefaultLists: boolean;
  }) {
    if (this.isRunning) {
      console.log('AdBlockerService is already running. Reconfiguring...');
      await this.stop(); // Stop before re-starting to apply new config
    }

    console.log('Starting AdBlockerService...');
    await this.loadEngine(config);
    this.scheduleUpdates(config);
    this.isRunning = true;
  }

  public async stop() {
    console.log('Stopping AdBlockerService...');
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = undefined;
    }
    if (this.blocker && this.session) {
      this.blocker.disableBlockingInSession(this.session);
    }
    this.blocker = undefined;
    this.isRunning = false;
  }

  public isEnabled(): boolean {
    return (
      this.isRunning &&
      this.blocker !== undefined &&
      this.blocker.isBlockingEnabled(this.session)
    );
  }

  private scheduleUpdates(config: {
    cache: boolean;
    additionalBlockLists: string[];
    disableDefaultLists: boolean;
  }) {
    if (this.updateInterval) clearInterval(this.updateInterval);

    this.updateInterval = setInterval(async () => {
      console.log('Performing scheduled adblock list update...');
      try {
        // Force a re-fetch by disabling the read cache for this run
        const tempConfig = { ...config, cache: false };
        await this.loadEngine(tempConfig, true);
        console.log('Adblock lists updated successfully.');
      } catch (error) {
        console.error('Failed to update adblock lists:', error);
      }
    }, TWENTY_FOUR_HOURS_IN_MS);
  }

  private async loadEngine(
    config: {
      cache: boolean;
      additionalBlockLists: string[];
      disableDefaultLists: boolean;
    },
    isUpdate = false,
  ) {
    const lists = [
      ...(config.disableDefaultLists ? [] : DEFAULT_BLOCKLISTS),
      ...config.additionalBlockLists,
    ];

    if (lists.length === 0) {
      console.warn('No blocklists provided. Adblocker will not be effective.');
      return;
    }

    // Generate a unique cache key based on the list URLs.
    // This makes the cache far more reliable.
    const cacheDirectory = path.join(app.getPath('userData'), 'adblock_cache');
    if (!fs.existsSync(cacheDirectory)) {
      fs.mkdirSync(cacheDirectory);
    }
    const listHash = createHash('md5').update(lists.join(',')).digest('hex');
    const cachePath = path.join(cacheDirectory, `engine-${listHash}.bin`);

    const cachingOptions = config.cache
      ? {
          path: cachePath,
          read: fsPromises.readFile,
          write: fsPromises.writeFile,
        }
      : undefined;

    try {
      // Temporarily disable blocking if we are performing an update
      if (isUpdate && this.blocker) {
        this.blocker.disableBlockingInSession(this.session);
      }

      this.blocker = await ElectronBlocker.fromLists(
        (url: string) => net.fetch(url),
        lists,
        {
          enableCompression: true,
          // We always want network filters loaded for the session
          loadNetworkFilters: true,
        },
        cachingOptions,
      );

      // IMPORTANT: This enables cosmetic filtering via the preload script
      this.blocker.enableBlockingInSession(this.session);
      console.log('Adblocker engine loaded and enabled.');
    } catch (error) {
      console.error('Error loading AdBlocker engine:', error);
      // If loading fails, ensure the old blocker (if any) is re-enabled
      if (isUpdate && this.blocker) {
        this.blocker.enableBlockingInSession(this.session);
      }
    }
  }
}