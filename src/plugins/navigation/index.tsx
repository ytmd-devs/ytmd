import { render } from 'solid-js/web';

import style from './style.css?inline';
import { createPlugin } from '@/utils';

import { t } from '@/i18n';

import '@mdui/icons/chevron-left.js';
import '@mdui/icons/chevron-right.js';

export default createPlugin({
  name: () => t('plugins.navigation.name'),
  description: () => t('plugins.navigation.description'),
  restartNeeded: false,
  config: {
    enabled: true,
  },
  renderer: {
    buttonContainer: document.createElement('div'),
    start() {
      if (!this.buttonContainer) {
        this.buttonContainer = document.createElement('div');
      }

      render(
        () => (
          <>
            <mdui-tooltip
              content={t('plugins.navigation.templates.back.title')}
            >
              <mdui-button-icon onClick={() => history.back()}>
                <mdui-icon-chevron-left
                  style={{ padding: '5px', scale: '1.5' }}
                />
              </mdui-button-icon>
            </mdui-tooltip>
            <mdui-tooltip
              content={t('plugins.navigation.templates.forward.title')}
            >
              <mdui-button-icon onClick={() => history.forward()}>
                <mdui-icon-chevron-right
                  style={{ padding: '5px', scale: '1.5' }}
                />
              </mdui-button-icon>
            </mdui-tooltip>
          </>
        ),
        this.buttonContainer,
      );
      const menu = document.querySelector('#right-content');
      menu?.prepend(this.buttonContainer);
    },
    stop() {
      this.buttonContainer.remove();
    },
  },
});
