import {
  createSignal,
  Switch,
  Match,
  For,
  createEffect,
  onCleanup,
  Suspense,
} from 'solid-js';

import General from './settings/General';
import Appearance from './settings/Appearance';
import Plugins from './settings/Plugins';
import Advanced from './settings/Advanced';
import About from './settings/About';
import { type Icons } from '@/types/icons';
import { t } from '@/i18n';

interface SidebarItem {
  icon: Icons;
  id: string;
}

const sidebar: SidebarItem[] = [
  { icon: 'icons:settings', id: 'general' },
  { icon: 'yt-icons:color_lens', id: 'appearance' },
  { icon: 'icons:extension', id: 'plugins' },
  { icon: 'icons:dashboard', id: 'advanced' },
  { icon: 'icons:info', id: 'about' },
];

interface SettingsModalProps {
  close: () => void;
}

export default (props: SettingsModalProps) => {
  const [currentCategory, setCurrentCategory] = createSignal('general');
  const [isSidebarExpanded, setIsSidebarExpanded] = createSignal(true);

  createEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 908;
      if (isMobile) {
        setIsSidebarExpanded(false);
      }
    };

    // initial call
    handleResize();

    window.addEventListener('resize', handleResize);
    onCleanup(() => window.removeEventListener('resize', handleResize));
  });

  return (
    <>
      <div
        class="ytmd-sui-modalOverlay"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            props.close();
          }
        }}
      >
        <div class="ytmd-sui-modal">
          <div
            class={`ytmd-sui-sidebar ${
              !isSidebarExpanded() ? 'collapsed' : ''
            }`}
          >
            <div class="ytmd-sui-sidebarContent">
              <For each={sidebar}>
                {(item) => (
                  <button
                    class={`ytmd-sui-menuItem ${
                      currentCategory() === item.id ? 'active' : ''
                    }`}
                    onClick={() => setCurrentCategory(item.id)}
                    title={
                      !isSidebarExpanded()
                        ? t(`plugins.settings-ui.label.${item.id}`)
                        : undefined
                    }
                  >
                    <span class="ytmd-sui-icon">
                      <yt-icon icon={item.icon} tabindex="0" />
                    </span>
                    <yt-formatted-string
                      class="ytmd-sui-menuLabel title style-scope ytmusic-guide-entry-renderer"
                      text={{
                        runs: [
                          { text: t(`plugins.settings-ui.label.${item.id}`) },
                        ],
                      }}
                    />
                  </button>
                )}
              </For>
            </div>
            <button
              class="ytmd-sui-sidebarToggle"
              onClick={() => setIsSidebarExpanded((old) => !old)}
              title={isSidebarExpanded() ? 'Collapse menu' : 'Expand menu'}
            >
              ☰
            </button>
          </div>

          <div class="ytmd-sui-content">
            <div class="ytmd-sui-header">
              <h2>
                {t(
                  `plugins.settings-ui.title.${
                    sidebar.find((item) => item.id === currentCategory())!.id
                  }`,
                )}
              </h2>
              <button class="ytmd-sui-closeButton" onClick={props.close}>
                ✕
              </button>
            </div>

            <Suspense fallback={<div class="ytmd-sui-loading">Loading...</div>}>
              <Switch fallback={<General />}>
                <Match when={currentCategory() === 'general'}>
                  <General />
                </Match>
                <Match when={currentCategory() === 'appearance'}>
                  <Appearance />
                </Match>
                <Match when={currentCategory() === 'plugins'}>
                  <Plugins />
                </Match>
                <Match when={currentCategory() === 'advanced'}>
                  <Advanced />
                </Match>
                <Match when={currentCategory() === 'about'}>
                  <About />
                </Match>
              </Switch>
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
};
