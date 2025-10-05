import { backend } from './backend';
import { renderer } from './renderer';

import { createPlugin } from '../../utils';

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
