import { createSignal } from 'solid-js';

export default () => {
  const [experimentalFeatures, setExperimentalFeatures] = createSignal(false);
  const [debugMode, setDebugMode] = createSignal(false);

  /*
    proxy
    overide user-agent
    disable hardware acceleration
    restart on config changes
    reset app cache when app starts
    toggle dev tools
    edit config.json
    tray settings
  */

  return (
    <div class="ytmd-sui-settingsContent">
      <div class="ytmd-sui-settingItem">
        <div class="ytmd-sui-settingText">
          <div class="ytmd-sui-settingLabel">
            <span class="ytmd-sui-settingTitle">Experimental features</span>
            <span class="ytmd-sui-settingDescription">
              Enable experimental features and updates
            </span>
          </div>
          <div
            class="ytmd-sui-toggle"
            onClick={() => setExperimentalFeatures((old) => !old)}
          >
            <div class="ytmd-sui-toggleHandle" />
          </div>
        </div>
      </div>

      <div class="ytmd-sui-settingItem">
        <div class="ytmd-sui-settingText">
          <div class="ytmd-sui-settingLabel">
            <span class="ytmd-sui-settingTitle">Debug mode</span>
            <span class="ytmd-sui-settingDescription">
              Show additional debugging information
            </span>
          </div>
          <div
            class="ytmd-sui-toggle"
            onClick={() => setDebugMode((old) => !old)}
          >
            <div class="ytmd-sui-toggleHandle" />
          </div>
        </div>
      </div>

      <div class="ytmd-sui-settingItem">
        <div class="ytmd-sui-settingText">
          <div class="ytmd-sui-settingLabel">
            <span class="ytmd-sui-settingTitle">Export configuration</span>
            <span class="ytmd-sui-settingDescription">
              Download your current configuration
            </span>
          </div>
          <button class="ytmd-sui-actionButton">Export</button>
        </div>
      </div>
    </div>
  );
};
