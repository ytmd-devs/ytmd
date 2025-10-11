import { createPlugin } from '../../utils';

import { backend } from './backend';
import { renderer } from './renderer';

export default createPlugin({
  name: () => 'Playlist Exporter',
  restartNeeded: false,
  config: {
    enabled: true,
  },
  menu: ({ window }) => [
    {
      label: 'Export Current Queue to CSV',
      click: () => {
        window.webContents.send('export-playlist');
      },
    },
  ],
  backend,
  renderer,
});
