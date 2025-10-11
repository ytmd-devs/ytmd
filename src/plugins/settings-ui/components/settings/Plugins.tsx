import {
  createEffect,
  createMemo,
  createSignal,
  For,
  Match,
  Switch,
} from 'solid-js';
import { allPlugins } from 'virtual:plugins';

import { jaroWinkler } from '@skyra/jaro-winkler';

import { debounce } from '@/providers/decorators';

import { plugins, Config } from '../../renderer';

interface PluginCardProps {
  id: string;
  label: string;
  description: string;
  authors?: string[];
}

const PluginCard = (props: PluginCardProps) => {
  const conf = createMemo(() => {
    return Config.signal().plugins[props.id] ?? { enabled: false };
  });

  const hasSettings = createMemo(() => {
    const { enabled, ...rest } = conf();
    return Object.keys(rest).length > 0;
  });

  const toggle = () => {
    if (conf().enabled) plugins.disable(props.id);
    else plugins.enable(props.id);
  };

  const plgOptions = () => {
    console.log('open plugin options modal');
  };

  return (
    <div class="ytmd-sui-settingItem ytmd-sui-plg-card">
      <div class="ytmd-sui-plg-left">
        <div class="ytmd-sui-pluginHeader">
          <span class="ytmd-sui-plg-title">{props.label}</span>
          <span class="ytmd-sui-plg-authors">{props.authors?.join(', ')}</span>
        </div>
        <p class="ytmd-sui-plg-description">{props.description}</p>
      </div>
      <div class="ytmd-sui-plg-right">
        <div
          class={`ytmd-sui-toggle ${conf().enabled ? 'active' : ''}`}
          onClick={toggle}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.key === 'Enter' || e.key === ' ') {
              toggle();
            }
          }}
          tabIndex={1}
        >
          <div class="ytmd-sui-toggleHandle" />
        </div>
        <div
          class="ytmd-sui-plg-options"
          onClick={plgOptions}
          onKeyUp={(e) => {
            e.preventDefault();
            if (e.key === 'Enter' || e.key === ' ') {
              plgOptions();
            }
          }}
          tabIndex={1}
        >
          <Switch fallback={<tp-yt-paper-icon-button icon="yt-icons:info" />}>
            <Match when={hasSettings()}>
              <tp-yt-paper-icon-button
                icon="yt-icons:tune"
                style={{ padding: '0.5rem', cursor: 'pointer' }}
              />
            </Match>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default () => {
  const [pluginsConfig, setPluginsConfig] = createSignal(
    Config.signal().plugins,
  );

  createEffect(() => {
    const { plugins } = Config.signal();
    setPluginsConfig(plugins);
  });

  // pretter-ignore
  const availablePlugins = Object.keys(allPlugins).sort((a, b) =>
    a.localeCompare(b),
  );

  type StatusFilter = 'all' | 'enabled' | 'disabled';

  const [query, setQuery] = createSignal('');
  const [filter, setFilter] = createSignal<StatusFilter>('all');
  const [filteredPlugins, setFilteredPlugins] = createSignal(availablePlugins);

  const filterImpl = debounce((search: string, filter: StatusFilter) => {
    let filtered;

    if (filter === 'all') {
      filtered = Array.from(availablePlugins);
    } else {
      filtered = [];

      for (const plugin of availablePlugins) {
        const enabled = pluginsConfig()[plugin]?.enabled ?? false;

        if (filter === 'enabled' && enabled) {
          filtered.push(plugin);
        } else if (filter === 'disabled' && !enabled) {
          filtered.push(plugin);
        }
      }
    }

    if (search) {
      filtered = filtered.filter((plugin) => {
        const pluginInstance = allPlugins[plugin];

        const name = jaroWinkler(pluginInstance.name().toLowerCase(), search);
        const threshold = 0.65;

        return (
          name >= threshold ||
          pluginInstance.description?.()?.toLowerCase()?.includes(search)
        );
      });
    }

    setFilteredPlugins(filtered);
  }, 100);

  createEffect(() => filterImpl(query().trim().toLowerCase(), filter()));

  return (
    <div class="ytmd-sui-settingsContent">
      <div class="ytmd-sui-pluginsFilters">
        <div class="ytmd-sui-pluginsSearch">
          <input
            class="ytmd-sui-input"
            onInput={(e) => setQuery(e.currentTarget.value)}
            placeholder="Search plugins..."
            type="text"
          />
        </div>
        <div class="ytmd-sui-settingText">
          <div class="ytmd-sui-settingLabel">
            <span class="ytmd-sui-settingTitle">Show</span>
          </div>
          <select
            class="ytmd-sui-select"
            onChange={(e) => setFilter(e.target.value as any)}
            tabIndex={1}
            value="all"
          >
            <option value="all">All</option>
            <option value="enabled">Enabled</option>
            <option value="disabled">Disabled</option>
          </select>
        </div>
      </div>
      <div class="ytmd-sui-pluginsSection">
        <For each={filteredPlugins()}>
          {(pluginId) => {
            const plugin = allPlugins[pluginId];
            return (
              <PluginCard
                authors={plugin.authors}
                description={plugin.description?.() ?? 'N/A'}
                id={pluginId}
                label={plugin.name()}
              />
            );
          }}
        </For>
      </div>
    </div>
  );
};
