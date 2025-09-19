/* eslint-disable stylistic/no-mixed-operators */
import {
  createEffect,
  createSignal,
  onCleanup,
  onMount,
  Show,
  untrack,
} from 'solid-js';
import { type VirtualizerHandle, VList } from 'virtua/solid';

import { LyricsPicker } from './components/LyricsPicker';

import { selectors, getSeekTime, SFont } from './utils';

import {
  ErrorDisplay,
  LoadingKaomoji,
  NotFoundKaomoji,
  SyncedLine,
  PlainLyrics,
} from './components';

import { currentLyrics } from './store';

import type { LineLyrics, SyncedLyricsPluginConfig } from '../types';

export const [isVisible, setIsVisible] = createSignal<boolean>(false);
export const [config, setConfig] =
  createSignal<SyncedLyricsPluginConfig | null>(null);

export const [fastScrollUntil, setFastScrollUntil] = createSignal<number>(0);
export const requestFastScroll = (windowMs = 700) =>
  setFastScrollUntil(performance.now() + windowMs);

export const [suppressFastUntil, setSuppressFastUntil] =
  createSignal<number>(0);
export const suppressFastScroll = (windowMs = 1200) =>
  setSuppressFastUntil(performance.now() + windowMs);

createEffect(() => {
  if (!config()?.enabled) return;
  const root = document.documentElement;
  const lineEffect = config()?.lineEffect || 'none';
  document.body.classList.toggle('enhanced-lyrics', lineEffect === 'enhanced');
  switch (lineEffect) {
    case 'enhanced':
      root.style.setProperty('--lyrics-font-family', 'Satoshi, sans-serif');
      root.style.setProperty('--lyrics-font-size', '3rem');
      root.style.setProperty('--lyrics-line-height', '1.333');
      root.style.setProperty('--lyrics-width', '100%');
      root.style.setProperty('--lyrics-padding', '12.5px');
      root.style.setProperty('--lyrics-will-change', 'transform, opacity');

      root.style.setProperty(
        '--lyrics-animations',
        'lyrics-glow var(--lyrics-glow-duration) forwards, lyrics-wobble var(--lyrics-wobble-duration) forwards',
      );

      root.style.setProperty('--lyrics-inactive-font-weight', '700');
      root.style.setProperty('--lyrics-inactive-opacity', '0.33');
      root.style.setProperty('--lyrics-inactive-scale', '0.95');
      root.style.setProperty('--lyrics-inactive-offset', '0');

      root.style.setProperty('--lyrics-active-font-weight', '700');
      root.style.setProperty('--lyrics-active-opacity', '1');
      root.style.setProperty('--lyrics-active-scale', '1');
      root.style.setProperty('--lyrics-active-offset', '0');

      root.style.setProperty('--lyrics-hover-scale', '0.975');
      root.style.setProperty('--lyrics-hover-opacity', '0.585');
      root.style.setProperty('--lyrics-hover-empty-opacity', '1');

      root.style.setProperty('--lyrics-empty-opacity', '0.495');
      break;
    case 'fancy':
      root.style.setProperty(
        '--lyrics-font-family',
        '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      );
      root.style.setProperty('--lyrics-font-size', '3rem');
      root.style.setProperty('--lyrics-line-height', '1.333');
      root.style.setProperty('--lyrics-width', '100%');
      root.style.setProperty('--lyrics-padding', '2rem');
      root.style.setProperty(
        '--lyrics-animations',
        'lyrics-glow var(--lyrics-glow-duration) forwards, lyrics-wobble var(--lyrics-wobble-duration) forwards',
      );
      root.style.setProperty('--lyrics-will-change', 'auto');

      root.style.setProperty('--lyrics-inactive-font-weight', '700');
      root.style.setProperty('--lyrics-inactive-opacity', '0.33');
      root.style.setProperty('--lyrics-inactive-scale', '0.95');
      root.style.setProperty('--lyrics-inactive-offset', '0');

      root.style.setProperty('--lyrics-active-font-weight', '700');
      root.style.setProperty('--lyrics-active-opacity', '1');
      root.style.setProperty('--lyrics-active-scale', '1');
      root.style.setProperty('--lyrics-active-offset', '0');

      root.style.setProperty('--lyrics-hover-scale', '0.95');
      root.style.setProperty('--lyrics-hover-opacity', '0.33');
      root.style.setProperty('--lyrics-hover-empty-opacity', '1');

      root.style.setProperty('--lyrics-empty-opacity', '1');
      break;
    case 'scale':
      root.style.setProperty(
        '--lyrics-font-family',
        '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      );
      root.style.setProperty(
        '--lyrics-font-size',
        'clamp(1.4rem, 1.1vmax, 3rem)',
      );
      root.style.setProperty(
        '--lyrics-line-height',
        'var(--ytmusic-body-line-height)',
      );
      root.style.setProperty('--lyrics-width', '83%');
      root.style.setProperty('--lyrics-padding', '0');
      root.style.setProperty('--lyrics-animations', 'none');
      root.style.setProperty('--lyrics-will-change', 'auto');

      root.style.setProperty('--lyrics-inactive-font-weight', '400');
      root.style.setProperty('--lyrics-inactive-opacity', '0.33');
      root.style.setProperty('--lyrics-inactive-scale', '1');
      root.style.setProperty('--lyrics-inactive-offset', '0');

      root.style.setProperty('--lyrics-active-font-weight', '700');
      root.style.setProperty('--lyrics-active-opacity', '1');
      root.style.setProperty('--lyrics-active-scale', '1.2');
      root.style.setProperty('--lyrics-active-offset', '0');

      root.style.setProperty('--lyrics-hover-scale', '1');
      root.style.setProperty('--lyrics-hover-opacity', '0.33');
      root.style.setProperty('--lyrics-hover-empty-opacity', '1');

      root.style.setProperty('--lyrics-empty-opacity', '1');
      break;
    case 'offset':
      root.style.setProperty(
        '--lyrics-font-family',
        '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      );
      root.style.setProperty(
        '--lyrics-font-size',
        'clamp(1.4rem, 1.1vmax, 3rem)',
      );
      root.style.setProperty(
        '--lyrics-line-height',
        'var(--ytmusic-body-line-height)',
      );
      root.style.setProperty('--lyrics-width', '100%');
      root.style.setProperty('--lyrics-padding', '0');
      root.style.setProperty('--lyrics-animations', 'none');
      root.style.setProperty('--lyrics-will-change', 'auto');

      root.style.setProperty('--lyrics-inactive-font-weight', '400');
      root.style.setProperty('--lyrics-inactive-opacity', '0.33');
      root.style.setProperty('--lyrics-inactive-scale', '1');
      root.style.setProperty('--lyrics-inactive-offset', '0');

      root.style.setProperty('--lyrics-active-font-weight', '700');
      root.style.setProperty('--lyrics-active-opacity', '1');
      root.style.setProperty('--lyrics-active-scale', '1');
      root.style.setProperty('--lyrics-active-offset', '5%');

      root.style.setProperty('--lyrics-hover-scale', '1');
      root.style.setProperty('--lyrics-hover-opacity', '0.33');
      root.style.setProperty('--lyrics-hover-empty-opacity', '1');

      root.style.setProperty('--lyrics-empty-opacity', '1');
      break;
    case 'focus':
      root.style.setProperty(
        '--lyrics-font-family',
        '"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
      );
      root.style.setProperty(
        '--lyrics-font-size',
        'clamp(1.4rem, 1.1vmax, 3rem)',
      );
      root.style.setProperty(
        '--lyrics-line-height',
        'var(--ytmusic-body-line-height)',
      );
      root.style.setProperty('--lyrics-width', '100%');
      root.style.setProperty('--lyrics-padding', '0');
      root.style.setProperty('--lyrics-animations', 'none');
      root.style.setProperty('--lyrics-will-change', 'auto');

      root.style.setProperty('--lyrics-inactive-font-weight', '400');
      root.style.setProperty('--lyrics-inactive-opacity', '0.33');
      root.style.setProperty('--lyrics-inactive-scale', '1');
      root.style.setProperty('--lyrics-inactive-offset', '0');

      root.style.setProperty('--lyrics-active-font-weight', '700');
      root.style.setProperty('--lyrics-active-opacity', '1');
      root.style.setProperty('--lyrics-active-scale', '1');
      root.style.setProperty('--lyrics-active-offset', '0');

      root.style.setProperty('--lyrics-hover-scale', '1');
      root.style.setProperty('--lyrics-hover-opacity', '0.33');
      root.style.setProperty('--lyrics-hover-empty-opacity', '1');

      root.style.setProperty('--lyrics-empty-opacity', '1');
      break;
  }
});

type LyricsRendererChild =
  | { kind: 'LyricsPicker' }
  | { kind: 'LoadingKaomoji' }
  | { kind: 'NotFoundKaomoji' }
  | { kind: 'Error'; error: Error }
  | {
      kind: 'SyncedLine';
      line: LineLyrics;
    }
  | {
      kind: 'PlainLine';
      line: string;
    };

const lyricsPicker: LyricsRendererChild = { kind: 'LyricsPicker' };

export const [currentTime, setCurrentTime] = createSignal<number>(-1);
export const [scrollTargetIndex, setScrollTargetIndex] =
  createSignal<number>(0);
export const LyricsRenderer = () => {
  const [scroller, setScroller] = createSignal<VirtualizerHandle>();
  const [stickyRef, setStickRef] = createSignal<HTMLElement | null>(null);

  let prevTimeForScroll = -1;
  let prevIndexForFast = -1;

  let scrollAnimRaf: number | null = null;
  let scrollAnimActive = false;

  const tab = document.querySelector<HTMLElement>(selectors.body.tabRenderer)!;

  let mouseCoord = 0;
  const mousemoveListener = (e: Event) => {
    if ('clientY' in e) {
      mouseCoord = (e as MouseEvent).clientY;
    }

    const { top } = tab.getBoundingClientRect();
    const { clientHeight: height } = stickyRef()!;
    const scrollOffset = scroller()?.scrollOffset ?? -1;

    const isInView = scrollOffset <= height;
    const isMouseOver = mouseCoord - top - 5 <= height;

    const showPicker = isInView || isMouseOver;

    if (showPicker) {
      // picker visible
      stickyRef()!.style.setProperty('--lyrics-picker-top', '0');
    } else {
      // picker hidden
      stickyRef()!.style.setProperty('--lyrics-picker-top', `-${height}px`);
    }
  };

  onMount(() => {
    SFont();
    const vList = document.querySelector<HTMLElement>('.synced-lyrics-vlist');

    tab.addEventListener('mousemove', mousemoveListener);
    vList?.addEventListener('scroll', mousemoveListener);
    vList?.addEventListener('scrollend', mousemoveListener);

    onCleanup(() => {
      tab.removeEventListener('mousemove', mousemoveListener);
      vList?.removeEventListener('scroll', mousemoveListener);
      vList?.removeEventListener('scrollend', mousemoveListener);
    });
  });

  const [children, setChildren] = createSignal<LyricsRendererChild[]>([
    { kind: 'LoadingKaomoji' },
  ]);
  const [firstEmptyIndex, setFirstEmptyIndex] = createSignal<number | null>(
    null,
  );

  createEffect(() => {
    const current = currentLyrics();
    if (!current) {
      setChildren(() => [{ kind: 'NotFoundKaomoji' }]);
      return;
    }

    const { state, data, error } = current;

    setChildren(() => {
      if (state === 'fetching') {
        return [{ kind: 'LoadingKaomoji' }];
      }

      if (state === 'error') {
        return [{ kind: 'Error', error: error! }];
      }

      if (data?.lines) {
        const lines = data.lines;
        const firstEmpty = lines.findIndex((l) => !l.text?.trim());
        setFirstEmptyIndex(firstEmpty === -1 ? null : firstEmpty);

        return lines.map((line) => ({
          kind: 'SyncedLine' as const,
          line,
        }));
      }

      if (data?.lyrics) {
        const rawLines = data.lyrics.split('\n');

        // preserve a single trailing empty line if provided by the provider
        const hasTrailingEmpty =
          rawLines.length > 0 && rawLines[rawLines.length - 1].trim() === '';

        const lines = rawLines.filter((line, idx) => {
          if (line.trim()) return true;
          // keep only the final empty line (for padding) if it exists
          return hasTrailingEmpty && idx === rawLines.length - 1;
        });

        return lines.map((line) => ({
          kind: 'PlainLine' as const,
          line,
        }));
      }

      setFirstEmptyIndex(null);
      return [{ kind: 'NotFoundKaomoji' }];
    });
  });

  const [statuses, setStatuses] = createSignal<
    ('previous' | 'current' | 'upcoming')[]
  >([]);
  createEffect(() => {
    const precise = config()?.preciseTiming ?? false;
    const data = currentLyrics()?.data;
    const currentTimeMs = currentTime();

    if (!data || !data.lines) {
      setStatuses([]);
      return;
    }

    const previous = untrack(statuses);

    const current = data.lines.map((line) => {
      const startTimeMs = getSeekTime(line.timeInMs, precise) * 1000;
      const endTimeMs =
        getSeekTime(line.timeInMs + line.duration, precise) * 1000;

      if (currentTimeMs < startTimeMs) return 'upcoming';
      if (currentTimeMs >= endTimeMs) return 'previous';
      return 'current';
    });

    if (previous.length !== current.length) {
      setStatuses(current);
      return;
    }

    if (!previous.every((status, idx) => status === current[idx])) {
      setStatuses(current);
    }
  });

  const [currentIndex, setCurrentIndex] = createSignal(0);
  createEffect(() => {
    const index = statuses().findIndex((status) => status === 'current');
    if (index === -1) return;
    setCurrentIndex(index);
  });

  // scroll effect
  createEffect(() => {
    const visible = isVisible();
    const current = currentLyrics();
    const targetIndex = scrollTargetIndex();
    const maxIndex = untrack(statuses).length - 1;
    const scrollerInstance = scroller();

    if (!visible || !scrollerInstance || !current.data?.lines) return;

    // hacky way to make the "current" line scroll to the center of the screen
    const scrollIndex = Math.min(targetIndex + 1, maxIndex);

    // animation duration
    const calculateDuration = (
      distance: number,
      jumpSize: number,
      fast: boolean,
    ) => {
      // fast scroll for others
      if (fast) {
        const d = 260 + distance * 0.28;
        return Math.min(680, Math.max(240, d));
      }

      let minDuration = 850;
      let maxDuration = 1650;
      let duration = 550 + distance * 0.7;

      if (jumpSize === 1) {
        minDuration = 1000;
        maxDuration = 1800;
        duration = 700 + distance * 0.8;
      } else if (jumpSize > 3) {
        minDuration = 600;
        maxDuration = 1400;
        duration = 400 + distance * 0.6;
      }

      return Math.min(maxDuration, Math.max(minDuration, duration));
    };

    // easing function
    const easeInOutCubic = (t: number) => {
      if (t < 0.5) {
        return 4 * t ** 3;
      }
      const t1 = -2 * t + 2;
      return 1 - t1 ** 3 / 2;
    };

    // target scroll offset
    const calculateEnhancedTargetOffset = (
      scrollerInstance: VirtualizerHandle,
      scrollIndex: number,
      currentIndex: number,
    ) => {
      const viewportSize = scrollerInstance.viewportSize;
      const itemOffset = scrollerInstance.getItemOffset(scrollIndex);
      const itemSize = scrollerInstance.getItemSize(scrollIndex);
      const maxScroll = scrollerInstance.scrollSize - viewportSize;

      if (currentIndex === 0) return 0;

      const viewportCenter = viewportSize / 2;
      const itemCenter = itemSize / 2;
      const centerOffset = itemOffset - viewportCenter + itemCenter;

      return Math.max(0, Math.min(centerOffset, maxScroll));
    };

    // enhanced scroll animation
    const performEnhancedScroll = (
      scrollerInstance: VirtualizerHandle,
      scrollIndex: number,
      currentIndex: number,
      fast: boolean,
    ) => {
      const targetOffset = calculateEnhancedTargetOffset(
        scrollerInstance,
        scrollIndex,
        currentIndex,
      );
      const startOffset = scrollerInstance.scrollOffset;

      if (startOffset === targetOffset) return;

      const distance = Math.abs(targetOffset - startOffset);
      const jumpSize = Math.abs(scrollIndex - currentIndex);
      const duration = calculateDuration(distance, jumpSize, fast);

      // offset start time for responsive feel
      const animationStartTimeOffsetMs = fast ? 15 : 170;
      const startTime = performance.now() - animationStartTimeOffsetMs;

      scrollAnimActive = false;
      if (scrollAnimRaf !== null) cancelAnimationFrame(scrollAnimRaf);

      if (distance < 0.5) {
        scrollerInstance.scrollTo(targetOffset);
        return;
      }

      const animate = (now: number) => {
        if (!scrollAnimActive) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);
        const offsetDiff = (targetOffset - startOffset) * eased;
        const currentOffset = startOffset + offsetDiff;

        scrollerInstance.scrollTo(currentOffset);
        if (progress < 1 && scrollAnimActive) {
          scrollAnimRaf = requestAnimationFrame(animate);
        }
      };

      scrollAnimActive = true;
      scrollAnimRaf = requestAnimationFrame(animate);
    };

    // validate scroller measurements
    const isScrollerReady = (
      scrollerInstance: VirtualizerHandle,
      scrollIndex: number,
    ) => {
      const viewport = scrollerInstance.viewportSize;
      const size = scrollerInstance.getItemSize(scrollIndex);
      const offset = scrollerInstance.getItemOffset(scrollIndex);
      return viewport > 0 && size > 0 && offset >= 0;
    };

    let readyRafId: number | null = null;

    const cleanup = () => {
      if (readyRafId !== null) cancelAnimationFrame(readyRafId);
      scrollAnimActive = false;
      if (scrollAnimRaf !== null) cancelAnimationFrame(scrollAnimRaf);
    };
    onCleanup(cleanup);

    // wait for scroller ready
    const waitForReady = (tries = 0) => {
      const nonEnhanced = config()?.lineEffect !== 'enhanced';
      const scrollerReady = isScrollerReady(scrollerInstance, scrollIndex);
      const hasCurrentIndex = !nonEnhanced || currentIndex() >= 0;

      if ((scrollerReady && hasCurrentIndex) || tries >= 20) {
        performScroll();
      } else {
        readyRafId = requestAnimationFrame(() => waitForReady(tries + 1));
      }
    };

    const performScroll = () => {
      const now = performance.now();
      const inFastWindow = now < fastScrollUntil();
      const suppressed = now < suppressFastUntil();

      if (config()?.lineEffect !== 'enhanced') {
        scrollerInstance.scrollToIndex(scrollIndex, {
          smooth: true,
          align: 'center',
        });
        return;
      }

      const targetOffset = calculateEnhancedTargetOffset(
        scrollerInstance,
        scrollIndex,
        targetIndex,
      );
      const startOffset = scrollerInstance.scrollOffset;
      const distance = Math.abs(targetOffset - startOffset);
      const viewport = scrollerInstance.viewportSize;
      const largeDistance = distance > Math.max(400, viewport * 0.6);
      const fast = inFastWindow && !suppressed && largeDistance;

      performEnhancedScroll(scrollerInstance, scrollIndex, targetIndex, fast);
    };

    waitForReady();
  });

  // handle scroll target updates based on current time
  createEffect(() => {
    const data = currentLyrics()?.data;
    const currentTimeMs = currentTime();
    const idx = currentIndex();
    const lineEffect = config()?.lineEffect;

    if (!data || !data.lines || idx < 0) return;
    const jumped =
      prevTimeForScroll >= 0 &&
      Math.abs(currentTimeMs - prevTimeForScroll) > 400;
    if (
      jumped &&
      prevTimeForScroll >= 0 &&
      performance.now() >= suppressFastUntil()
    ) {
      const timeDelta = Math.abs(currentTimeMs - prevTimeForScroll);
      const lineDelta =
        prevIndexForFast >= 0 ? Math.abs(idx - prevIndexForFast) : 0;
      if (timeDelta > 1500 || lineDelta >= 5) {
        requestFastScroll(1500);
      }
    }
    prevTimeForScroll = currentTimeMs;

    const scrollOffset = scroller()?.scrollOffset ?? 0;
    if (idx === 0 && currentTimeMs > 2000 && !jumped && scrollOffset <= 1) {
      return;
    }

    if (lineEffect === 'enhanced') {
      const nextIdx = Math.min(idx + 1, data.lines.length - 1);
      const nextLine = data.lines[nextIdx];

      if (nextLine) {
        // start scroll early
        const leadInTimeMs = 130;
        const timeUntilNextLine = nextLine.timeInMs - currentTimeMs;

        if (timeUntilNextLine <= leadInTimeMs) {
          setScrollTargetIndex(nextIdx);
          prevIndexForFast = idx;
          return;
        }
      }
    }

    prevIndexForFast = idx;
    setScrollTargetIndex(idx);
  });

  return (
    <Show when={isVisible()}>
      <VList
        {...{
          ref: setScroller,
          style: { 'scrollbar-width': 'none' },
          class: 'synced-lyrics-vlist',
          keepMounted: [0],
          overscan: 4,
        }}
        data={[lyricsPicker, ...children()]}
      >
        {(props, idx) => {
          if (typeof props === 'undefined') return null;
          switch (props.kind) {
            case 'LyricsPicker':
              return <LyricsPicker setStickRef={setStickRef} />;
            case 'Error':
              return <ErrorDisplay {...props} />;
            case 'LoadingKaomoji':
              return <LoadingKaomoji />;
            case 'NotFoundKaomoji':
              return <NotFoundKaomoji />;
            case 'SyncedLine': {
              return (
                <SyncedLine
                  {...props}
                  index={idx()}
                  isFinalLine={idx() === children().length}
                  isFirstEmptyLine={
                    firstEmptyIndex() !== null &&
                    idx() - 1 === firstEmptyIndex()
                  }
                  scroller={scroller()!}
                  status={statuses()[idx() - 1]}
                />
              );
            }
            case 'PlainLine': {
              return <PlainLyrics {...props} />;
            }
          }
        }}
      </VList>
    </Show>
  );
};
