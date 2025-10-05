import { dialog } from 'electron';

import { promises as fs } from 'fs';

import type { BackendContext } from '../../types/contexts';

const convertToCSV = (data: any[]) => {
  if (data.length === 0) return '';
  const header = Object.keys(data[0]).join(',');
  const rows = data.map(row =>
    Object.values(row).map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')
  );
  return [header, ...rows].join('\n');
};

// Add the config type to BackendContext
export const backend = ({ ipc }: BackendContext<{ enabled: true }>) => {
  ipc.on('save-playlist-data', async (_: any, data: any[]) => {
    const csvData = convertToCSV(data);
    if (!csvData) {
      dialog.showErrorBox('Export Failed', 'There are no songs to export.');
      return;
    }

    const { filePath } = await dialog.showSaveDialog({
      title: 'Save Playlist as CSV',
      defaultPath: 'playlist.csv',
      filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    });

    if (filePath) {
      await fs.writeFile(filePath, csvData);
    }
  });
};