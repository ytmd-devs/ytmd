import {
  createEffect,
  createMemo,
  createSignal,
  For,
  Index,
  Match,
  onCleanup,
  onMount,
  type Setter,
  Switch,
} from 'solid-js';

import * as z from 'zod';

import {
  type ProviderName,
  providerNames,
  ProviderNameSchema,
  type ProviderState,
} from '../../providers';
import { currentLyrics, lyricsStore, setLyricsStore } from '../store';
import { _ytAPI } from '../index';
import { config } from '../renderer';

import type { YtIcons } from '@/types/icons';
import type { PlayerAPIEvents } from '@/types/player-api-events';

const LocalStorageSchema = z.object({
  provider: ProviderNameSchema,
});

export const providerIdx = createMemo(() =>
  providerNames.indexOf(lyricsStore.provider),
);

const shouldSwitchProvider = (providerData: ProviderState) => {
  if (providerData.state === 'error') return true;
  if (providerData.state === 'fetching') return true;
  return (
    providerData.state === 'done' &&
    !providerData.data?.lines &&
    !providerData.data?.lyrics
  );
};

const providerBias = (p: ProviderName) =>
  (lyricsStore.lyrics[p].state === 'done' ? 1 : -1) +
  (lyricsStore.lyrics[p].data?.lines?.length ? 2 : -1) +
  (lyricsStore.lyrics[p].data?.lines?.length && p === 'YTMusic' ? 1 : 0) +
  (lyricsStore.lyrics[p].data?.lyrics ? 1 : -1);

const pickBestProvider = () => {
  const preferred = config()?.preferredProvider;
  if (preferred) {
    const data = lyricsStore.lyrics[preferred].data;
    if (Array.isArray(data?.lines) || data?.lyrics) {
      return { provider: preferred, force: true };
    }
  }

  const providers = Array.from(providerNames);

  providers.sort((a, b) => providerBias(b) - providerBias(a));

  return { provider: providers[0], force: false };
};

const [hasManuallySwitchedProvider, setHasManuallySwitchedProvider] =
  createSignal(false);

export const LyricsPicker = (props: {
  setStickRef: Setter<HTMLElement | null>;
}) => {
  const [videoId, setVideoId] = createSignal<string | null>(null);
  const [starredProvider, setStarredProvider] =
    createSignal<ProviderName | null>(null);

  createEffect(() => {
    const id = videoId();
    if (id === null) {
      setStarredProvider(null);
      return;
    }

    const key = `ytmd-sl-starred-${id}`;
    const value = localStorage.getItem(key);
    if (!value) {
      setStarredProvider(null);
      return;
    }

    const parseResult = LocalStorageSchema.safeParse(JSON.parse(value));
    if (parseResult.success) {
      setLyricsStore('provider', parseResult.data.provider);
      setStarredProvider(parseResult.data.provider);
    } else {
      setStarredProvider(null);
    }
  });

  const toggleStar = () => {
    const id = videoId();
    if (id === null) return;

    const key = `ytmd-sl-starred-${id}`;

    setStarredProvider((starredProvider) => {
      if (lyricsStore.provider === starredProvider) {
        localStorage.removeItem(key);
        return null;
      }

      const provider = lyricsStore.provider;
      localStorage.setItem(key, JSON.stringify({ provider }));

      return provider;
    });
  };

  const videoDataChangeHandler = (
    name: string,
    { videoId }: PlayerAPIEvents['videodatachange']['value'],
  ) => {
    setVideoId(videoId);

    if (name !== 'dataloaded') return;
    setHasManuallySwitchedProvider(false);
  };

  // prettier-ignore
  {
    onMount(() => _ytAPI?.addEventListener('videodatachange', videoDataChangeHandler));
    onCleanup(() => _ytAPI?.removeEventListener('videodatachange', videoDataChangeHandler));
  }

  createEffect(() => {
    if (!hasManuallySwitchedProvider()) {
      const starred = starredProvider();
      if (starred !== null) {
        setLyricsStore('provider', starred);
        return;
      }

      const allProvidersFailed = providerNames.every((p) =>
        shouldSwitchProvider(lyricsStore.lyrics[p]),
      );
      if (allProvidersFailed) return;

      const { provider, force } = pickBestProvider();
      if (
        force ||
        providerBias(lyricsStore.provider) < providerBias(provider)
      ) {
        setLyricsStore('provider', provider);
      }
    }
  });

  const next = () => {
    setHasManuallySwitchedProvider(true);
    setLyricsStore('provider', (prevProvider) => {
      const idx = providerNames.indexOf(prevProvider);
      return providerNames[(idx + 1) % providerNames.length];
    });
  };

  const previous = () => {
    setHasManuallySwitchedProvider(true);
    setLyricsStore('provider', (prevProvider) => {
      const idx = providerNames.indexOf(prevProvider);
      return providerNames[
        (idx + providerNames.length - 1) % providerNames.length
      ];
    });
  };

  const chevronLeft: YtIcons = 'yt-icons:chevron_left';
  const chevronRight: YtIcons = 'yt-icons:chevron_right';

  const successIcon: YtIcons = 'yt-icons:check-circle';
  const errorIcon: YtIcons = 'yt-icons:error';
  const notFoundIcon: YtIcons = 'yt-icons:warning';

  return (
    <div class="lyrics-picker" ref={props.setStickRef}>
      <div class="lyrics-picker-left">
        <yt-icon-button
          class="style-scope ytmusic-player-bar"
          icon={chevronLeft}
          onClick={previous}
          role={'button'}
        >
          <span class="yt-icon-shape style-scope yt-icon yt-spec-icon-shape">
            <div
              style={{
                'width': '100%',
                'height': '100%',
                'display': 'flex',
                'align-items': 'center',
                'fill': 'currentcolor',
              }}
            >
              <svg
                class="style-scope yt-icon"
                fill="#FFFFFF"
                height={'40px'}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 -960 960 960"
                width={'40px'}
              >
                <g class="style-scope yt-icon">
                  <path
                    class="style-scope yt-icon"
                    d="M560.67-240 320-480.67l240.67-240.66L608-674 414.67-480.67 608-287.33 560.67-240Z"
                  />
                </g>
              </svg>
            </div>
          </span>
        </yt-icon-button>
      </div>

      <div class="lyrics-picker-content">
        <div class="lyrics-picker-content-label">
          <Index each={providerNames}>
            {(provider) => (
              <div
                class="lyrics-picker-item"
                style={{
                  transform: `translateX(${providerIdx() * -100 - 5}%)`,
                }}
                tabindex="-1"
              >
                <Switch>
                  <Match
                    when={
                      // prettier-ignore
                      currentLyrics().state === 'fetching'
                    }
                  >
                    <tp-yt-paper-spinner-lite
                      active
                      class="loading-indicator style-scope"
                      style={{ padding: '5px', transform: 'scale(0.5)' }}
                      tabindex="-1"
                    />
                  </Match>
                  <Match when={currentLyrics().state === 'error'}>
                    <yt-icon
                      icon={errorIcon}
                      style={{ padding: '5px', transform: 'scale(0.8)' }}
                      tabindex="-1"
                    />
                  </Match>
                  <Match
                    when={
                      currentLyrics().state === 'done' &&
                      (currentLyrics().data?.lines ||
                        currentLyrics().data?.lyrics)
                    }
                  >
                    <yt-icon
                      icon={successIcon}
                      style={{ padding: '5px', transform: 'scale(0.8)' }}
                      tabindex="-1"
                    />
                  </Match>
                  <Match
                    when={
                      currentLyrics().state === 'done' &&
                      !currentLyrics().data?.lines &&
                      !currentLyrics().data?.lyrics
                    }
                  >
                    <yt-icon
                      icon={notFoundIcon}
                      style={{ padding: '5px', transform: 'scale(0.8)' }}
                      tabindex="-1"
                    />
                  </Match>
                </Switch>
                <yt-formatted-string
                  class="description ytmusic-description-shelf-renderer"
                  text={{ runs: [{ text: provider() }] }}
                />
                <yt-icon
                  icon={
                    starredProvider() === provider()
                      ? 'yt-sys-icons:star-filled'
                      : 'yt-sys-icons:star'
                  }
                  onClick={toggleStar}
                  style={{
                    padding: '5px',
                    transform: 'scale(0.8)',
                    cursor: 'pointer',
                  }}
                  tabindex="-1"
                />
              </div>
            )}
          </Index>
        </div>

        <ul class="lyrics-picker-content-dots">
          <For each={providerNames}>
            {(_, idx) => (
              <li
                class="lyrics-picker-dot"
                onClick={() => setLyricsStore('provider', providerNames[idx()])}
                style={{
                  background: idx() === providerIdx() ? 'white' : 'black',
                }}
              />
            )}
          </For>
        </ul>
      </div>

      <div class="lyrics-picker-right">
        <yt-icon-button
          class="style-scope ytmusic-player-bar"
          icon={chevronRight}
          onClick={next}
          role={'button'}
        >
          <span class="yt-icon-shape style-scope yt-icon yt-spec-icon-shape">
            <div
              style={{
                'width': '100%',
                'height': '100%',
                'display': 'flex',
                'align-items': 'center',
                'fill': 'currentcolor',
              }}
            >
              <svg
                class="style-scope yt-icon"
                fill="#FFFFFF"
                height={'40px'}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 -960 960 960"
                width={'40px'}
              >
                <g class="style-scope yt-icon">
                  <path
                    class="style-scope yt-icon"
                    d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"
                  />
                </g>
              </svg>
            </div>
          </span>
        </yt-icon-button>
      </div>
    </div>
  );
};
