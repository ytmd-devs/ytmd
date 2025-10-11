import { createSignal } from 'solid-js';

import { t } from '@/i18n';

import { Toggle } from '../Toggle';
import { Select } from '../Select';

export default () => {
  const [removeUpgradeButton, setRemoveUpgradeButton] = createSignal(false);
  const [likeButtons, setLikeButtons] = createSignal('');

  // prettier-ignore
  const t$ = (key: string) => t(`main.menu.options.submenu.visual-tweaks.submenu.${key}`);

  return (
    <div class="ytmd-sui-settingsContent">
      <Toggle
        description="Remove the upgrade button from the sidebar"
        label={t$('remove-upgrade-button')}
        toggle={() => setRemoveUpgradeButton((old) => !old)}
        value={removeUpgradeButton()}
      />

      <Select
        description="todo!()"
        label={t$('like-buttons.label')}
        onSelect={(value) => setLikeButtons(value)}
        options={[
          { label: t$('like-buttons.default'), value: '' },
          { label: t$('like-buttons.force-show'), value: 'force' },
          { label: t$('like-buttons.hide'), value: 'hide' },
        ]}
        value={likeButtons()}
      />
    </div>
  );
};
