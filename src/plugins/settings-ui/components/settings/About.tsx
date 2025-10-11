import { For, lazy, Show } from 'solid-js';

import { getAppVersion, getPlatform, getVersions } from '../../renderer';

interface ImplProps {
  appVersion: string;
  platform: string;
  versions: Record<string, string>;
}

const Impl = (props: ImplProps) => {
  return (
    <div class="ytmd-sui-settingsContent">
      <div class="ytmd-sui-aboutSection">
        <h3>
          <span class="ytmd-sui-about-guser">th-ch/</span>
          <span class="ytmd-sui-about-grepo">youtube-music</span>
        </h3>
        <p class="ytmd-sui-version">
          v{props.appVersion}
          {import.meta.env.DEV ? ' (dev)' : ''}
        </p>
        <p class="ytmd-sui-description">
          YouTube Music Desktop App bundled with custom plugins (and built-in ad
          blocker / downloader)
        </p>
      </div>

      <div class="ytmd-sui-aboutSection">
        <h4>System Information</h4>
        <div class="ytmd-sui-systemInfo">
          <div class="ytmd-sui-infoRow">
            <span>Operating System</span>
            <span>{props.platform}</span>
          </div>
          <For each={['electron', 'chrome', 'node', 'v8']}>
            {(name) => (
              <Show when={props.versions[name]}>
                <div class="ytmd-sui-infoRow">
                  <span>{name === 'chrome' ? 'chromium' : name}</span>
                  <span>{props.versions[name]}</span>
                </div>
              </Show>
            )}
          </For>
        </div>
      </div>

      {/* <div class="ytmd-sui-aboutSection">
        <button class="ytmd-sui-actionButton">Check for Updates</button>
        <button class="ytmd-sui-actionButton">View Licenses</button>
      </div> */}
    </div>
  );
};

export default lazy(async () => {
  const appVersion = await getAppVersion();
  const platform = await getPlatform();
  const versions = await getVersions();

  return {
    default: () => (
      <Impl appVersion={appVersion} platform={platform} versions={versions} />
    ),
  };
});
