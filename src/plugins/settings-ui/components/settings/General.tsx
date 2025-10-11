import { createEffect, createSignal, lazy, type Setter, Show } from 'solid-js';
import { languageResources } from 'virtual:i18n';

import { t } from '@/i18n';

import * as data from '@/providers/extracted-data';
import { debounce } from '@/providers/decorators';

import { getPlatform, Config } from '../../renderer';

import { Toggle } from '../Toggle';
import { Select } from '../Select';

const Impl = (props: {
  platform: string;
  languages: { label: string; value: string }[];
}) => {
  const startingPages = [{ label: 'Unset', value: '' }].concat(
    Object.keys(data.startingPages).map((key) => ({
      label: key,
      value: key,
    })),
  );

  const { options: opts } = Config.signal();
  type DirtableValue<T> = { dirty: boolean; value: T };

  const dty = <T,>(value: T): DirtableValue<T> => ({ dirty: false, value });

  const [autoUpdates, setAutoUpdates] = createSignal(dty(opts.autoUpdates));
  const [startOnLogin, setStartOnLogin] = createSignal(dty(opts.startAtLogin));
  const [autoResume, setAutoResume] = createSignal(dty(opts.resumeOnStart));
  const [startingPage, setStartingPage] = createSignal(dty(opts.startingPage));
  const [alwaysOnTop, setAlwaysOnTop] = createSignal(dty(opts.alwaysOnTop));
  const [hideMenu, setHideMenu] = createSignal(dty(opts.hideMenu));
  const [language, setLanguage] = createSignal(dty(opts.language ?? 'en'));

  /**
   * propagate external config changes to the settings UI
   */
  createEffect(() => {
    const { options } = Config.signal();

    const changeIfClean =
      <T,>(value: T) =>
      (old: { dirty: boolean; value: T }) => {
        if (old.dirty) return old;
        return { dirty: false, value };
      };

    setAutoUpdates(changeIfClean(options.autoUpdates));
    setStartOnLogin(changeIfClean(options.startAtLogin));
    setAutoResume(changeIfClean(options.resumeOnStart));
    setStartingPage(changeIfClean(options.startingPage));
    setAlwaysOnTop(changeIfClean(options.alwaysOnTop));
    setHideMenu(changeIfClean(options.hideMenu));
    setLanguage(changeIfClean(options.language ?? 'en'));
  });

  const debouncers: Record<string, CallableFunction> = {};
  const updateIfDirty = <T,>(
    key: Parameters<typeof Config.get>[0],
    { dirty, value }: DirtableValue<T>,
    setter: Setter<DirtableValue<T>>,
  ) => {
    debouncers[key] ??= debounce(
      async (
        { dirty, value }: DirtableValue<T>,
        setter: Setter<DirtableValue<T>>,
      ) => {
        if (dirty) {
          console.log(`${key} = ${value}`);
          setter({ dirty: false, value });
          await Config.set(key, value as any);
        }
      },
      200,
    );

    debouncers[key]({ dirty, value }, setter);
  };

  createEffect(() => {
    updateIfDirty('options.autoUpdates', autoUpdates(), setAutoUpdates);
    updateIfDirty('options.startAtLogin', startOnLogin(), setStartOnLogin);
    updateIfDirty('options.resumeOnStart', autoResume(), setAutoResume);
    updateIfDirty('options.startingPage', startingPage(), setStartingPage);
    updateIfDirty('options.alwaysOnTop', alwaysOnTop(), setAlwaysOnTop);
    updateIfDirty('options.hideMenu', hideMenu(), setHideMenu);
    updateIfDirty('options.language', language(), setLanguage);
  });

  const t$ = (key: string) => t(`main.menu.options.submenu.${key}`);
  return (
    <div class="ytmd-sui-settingsContent ytmd-sui-scroll">
      <Show
        when={
          props.platform.startsWith('Windows') ||
          props.platform.startsWith('macOS')
        }
      >
        <Toggle
          description="Start youtube-music on login"
          label={t$('start-at-login')}
          toggle={() =>
            setStartOnLogin(({ value }) => ({ dirty: true, value: !value }))
          }
          value={startOnLogin().value}
        />
      </Show>

      <Select
        description="Select the language for the application"
        label={t$('language.label') + ' (Language)'}
        onSelect={(value) => setLanguage({ dirty: true, value })}
        options={props.languages}
        value={language().value}
      />

      <Select
        description="Select which page to show when the application starts"
        label={t$('starting-page.label')}
        onSelect={(value) => setStartingPage({ dirty: true, value })}
        options={startingPages}
        value={startingPage().value}
      />

      <Toggle
        description="Automatically get notified about new versions"
        label={t$('auto-update')}
        toggle={() =>
          setAutoUpdates(({ value }) => ({ dirty: true, value: !value }))
        }
        value={autoUpdates().value}
      />

      <Toggle
        description="Resume last song when app starts"
        label={t$('resume-on-start')}
        toggle={() =>
          setAutoResume(({ value }) => ({ dirty: true, value: !value }))
        }
        value={autoResume().value}
      />

      <Toggle
        description="Keep the application window on top of other windows"
        label={t$('always-on-top')}
        toggle={() =>
          setAlwaysOnTop(({ value }) => ({ dirty: true, value: !value }))
        }
        value={alwaysOnTop().value}
      />

      <Show
        when={
          props.platform.startsWith('Windows') ||
          props.platform.startsWith('Linux')
        }
      >
        <Toggle
          description="Hide the menu bar"
          label={t$('hide-menu.label')}
          toggle={() =>
            setHideMenu(({ value }) => ({ dirty: true, value: !value }))
          }
          value={hideMenu().value}
        />
      </Show>
    </div>
  );
};

export default lazy(async () => {
  const langRes = languageResources;

  type LanguageOption = { label: string; value: string };

  const languages = Object.keys(langRes)
    .reduce(
      // prettier-ignore
      (acc, lang) => {
        const englishName = langRes[lang].translation.language?.name ?? 'Unknown';
        const nativeName = langRes[lang].translation.language?.['local-name'] ?? 'Unknown';

        acc.push({
          label: `${englishName} (${nativeName})`,
          value: lang,
        });

        return acc;
      },
      [] as LanguageOption[],
    )
    .sort(({ label: A }, { label: B }) => A.localeCompare(B));

  const platform = await getPlatform();

  return {
    default: () => <Impl languages={languages} platform={platform} />,
  };
});
