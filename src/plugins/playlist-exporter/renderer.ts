import type { RendererContext } from '../../types/contexts';

interface VideoDetails {
  title?: string;
  author?: string;
  album?: string;
  lengthSeconds?: number;
  videoId?: string;
}

interface QueueItem {
  videoDetails?: VideoDetails;
}

interface PlayerApi {
  getQueue: () => QueueItem[];
}

export const renderer = ({ ipc }: RendererContext<Record<string, unknown>>) => {
  let playerApi: PlayerApi | null = null;

  (
    window as { onPlayerApiReady: (callback: (api: PlayerApi) => void) => void }
  ).onPlayerApiReady((api: PlayerApi) => {
    playerApi = api;
  });

  ipc.on('export-playlist', () => {
    if (!playerApi) {
      alert('Player API not ready yet. Please wait a moment and try again.');
      return;
    }

    const queue = playerApi.getQueue();
    if (!queue || queue.length === 0) {
      alert('No songs in the queue to export.');
      return;
    }

    const playlistData = queue.map((song: QueueItem) => ({
      title: song.videoDetails?.title,
      artist: song.videoDetails?.author,
      album: song.videoDetails?.album,
      durationSeconds: song.videoDetails?.lengthSeconds,
      videoId: song.videoDetails?.videoId,
    }));

    ipc.invoke('save-playlist-data', playlistData);
  });
};
