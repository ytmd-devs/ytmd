import type { RendererContext } from '../../types/contexts';

export const renderer = ({ ipc }: RendererContext<any>) => {
  let playerApi: any = null;

  (window as any).onPlayerApiReady((api: any) => {
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

    const playlistData = queue.map((song: any) => ({
      title: song.videoDetails?.title,
      artist: song.videoDetails?.author,
      album: song.videoDetails?.album,
      durationSeconds: song.videoDetails?.lengthSeconds,
      videoId: song.videoDetails?.videoId,
    }));

    ipc.invoke('save-playlist-data', playlistData);
  });
};