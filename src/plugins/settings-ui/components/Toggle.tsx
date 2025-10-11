interface ToggleProps {
  label: string;
  description: string;
  value: boolean;
  toggle: () => void;
}

export const Toggle = (props: ToggleProps) => {
  return (
    <div class="ytmd-sui-settingItem">
      <div class="ytmd-sui-settingText">
        <div class="ytmd-sui-settingLabel">
          <span class="ytmd-sui-settingTitle">{props.label}</span>
          <span class="ytmd-sui-settingDescription">{props.description}</span>
        </div>
        <div
          class={`ytmd-sui-toggle ${props.value ? 'active' : ''}`}
          onClick={props.toggle}
          onKeyUp={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              props.toggle();
            }
          }}
          tabIndex={1}
        >
          <div class="ytmd-sui-toggleHandle" />
        </div>
      </div>
    </div>
  );
};
