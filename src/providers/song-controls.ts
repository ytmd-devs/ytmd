// This is used for to control the songs
import { type BrowserWindow, ipcMain } from 'electron';

import { LikeType } from '@/types/datahost-get-state';

// see protocol-handler.ts
type ArgsType<T> = T | string[] | undefined;

const parseNumberFromArgsType = (args: ArgsType<number>) => {
  if (typeof args === 'number') {
    return args;
  } else if (Array.isArray(args)) {
    return Number(args[0]);
  } else {
    return null;
  }
};

const parseBooleanFromArgsType = (args: ArgsType<boolean>) => {
  if (typeof args === 'boolean') {
    return args;
  } else if (Array.isArray(args)) {
    return args[0] === 'true';
  } else {
    return null;
  }
};

const parseStringFromArgsType = (args: ArgsType<string>) => {
  if (typeof args === 'string') {
    return args;
  } else if (Array.isArray(args)) {
    return args[0];
  } else {
    return null;
  }
};

export const getSongControls = (win: BrowserWindow) => {
  return {
    // Playback
    previous: () => win.webContents.send('ytmd:previous-video'),
    next: () => win.webContents.send('ytmd:next-video'),
    play: () => win.webContents.send('ytmd:play'),
    pause: () => win.webContents.send('ytmd:pause'),
    playPause: () => win.webContents.send('ytmd:toggle-play'),
    like: () => win.webContents.send('ytmd:update-like', LikeType.Like),
    dislike: () => win.webContents.send('ytmd:update-like', LikeType.Dislike),
    seekTo: (seconds: ArgsType<number>) => {
      const secondsNumber = parseNumberFromArgsType(seconds);
      if (secondsNumber !== null) {
        win.webContents.send('ytmd:seek-to', seconds);
      }
    },
    goBack: (seconds: ArgsType<number>) => {
      const secondsNumber = parseNumberFromArgsType(seconds);
      if (secondsNumber !== null) {
        win.webContents.send('ytmd:seek-by', -secondsNumber);
      }
    },
    goForward: (seconds: ArgsType<number>) => {
      const secondsNumber = parseNumberFromArgsType(seconds);
      if (secondsNumber !== null) {
        win.webContents.send('ytmd:seek-by', seconds);
      }
    },
    requestShuffleInformation: () => {
      win.webContents.send('ytmd:get-shuffle');
    },
    shuffle: () => win.webContents.send('ytmd:shuffle'),
    switchRepeat: (n: ArgsType<number> = 1) => {
      const repeat = parseNumberFromArgsType(n);
      if (repeat !== null) {
        win.webContents.send('ytmd:switch-repeat', n);
      }
    },
    // General
    setVolume: (volume: ArgsType<number>) => {
      const volumeNumber = parseNumberFromArgsType(volume);
      if (volumeNumber !== null) {
        win.webContents.send('ytmd:update-volume', volume);
      }
    },
    setFullscreen: (isFullscreen: ArgsType<boolean>) => {
      const isFullscreenValue = parseBooleanFromArgsType(isFullscreen);
      if (isFullscreenValue !== null) {
        win.setFullScreen(isFullscreenValue);
        win.webContents.send('ytmd:click-fullscreen-button', isFullscreenValue);
      }
    },
    requestFullscreenInformation: () => {
      win.webContents.send('ytmd:get-fullscreen');
    },
    requestQueueInformation: () => {
      win.webContents.send('ytmd:get-queue');
    },
    muteUnmute: () => win.webContents.send('ytmd:toggle-mute'),
    openSearchBox: () => {
      win.webContents.sendInputEvent({
        type: 'keyDown',
        keyCode: '/',
      });
    },
    // Queue
    addSongToQueue: (videoId: string, queueInsertPosition: string) => {
      const videoIdValue = parseStringFromArgsType(videoId);
      if (videoIdValue === null) return;

      win.webContents.send(
        'ytmd:add-to-queue',
        videoIdValue,
        queueInsertPosition,
      );
    },
    moveSongInQueue: (
      fromIndex: ArgsType<number>,
      toIndex: ArgsType<number>,
    ) => {
      const fromIndexValue = parseNumberFromArgsType(fromIndex);
      const toIndexValue = parseNumberFromArgsType(toIndex);
      if (fromIndexValue === null || toIndexValue === null) return;

      win.webContents.send('ytmd:move-in-queue', fromIndexValue, toIndexValue);
    },
    removeSongFromQueue: (index: ArgsType<number>) => {
      const indexValue = parseNumberFromArgsType(index);
      if (indexValue === null) return;

      win.webContents.send('ytmd:remove-from-queue', indexValue);
    },
    setQueueIndex: (index: ArgsType<number>) => {
      const indexValue = parseNumberFromArgsType(index);
      if (indexValue === null) return;

      win.webContents.send('ytmd:set-queue-index', indexValue);
    },
    clearQueue: () => win.webContents.send('ytmd:clear-queue'),

    search: (query: string, params?: string, continuation?: string) =>
      new Promise((resolve) => {
        ipcMain.once('ytmd:search-results', (_, result) => {
          resolve(result as string);
        });
        win.webContents.send('ytmd:search', query, params, continuation);
      }),
  };
};
