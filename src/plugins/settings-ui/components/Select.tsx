import { For } from 'solid-js';

interface SelectProps {
  label: string;
  description: string;

  value: string;
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  return (
    <div class="ytmd-sui-settingItem">
      <div class="ytmd-sui-settingText">
        <div class="ytmd-sui-settingLabel">
          <span class="ytmd-sui-settingTitle">{props.label}</span>
          <span class="ytmd-sui-settingDescription">{props.description}</span>
        </div>
        <select
          class="ytmd-sui-select"
          onChange={(e) => props.onSelect(e.currentTarget.value)}
          tabIndex={1}
          value={props.value}
        >
          <For each={props.options}>
            {({ label, value }) => <option value={value}>{label}</option>}
          </For>
        </select>
      </div>
    </div>
  );
};
