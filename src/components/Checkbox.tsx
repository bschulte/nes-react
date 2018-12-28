import * as React from "react";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onSelect?: () => void;
  style?: any;
}

export default function CheckBox(props: CheckboxProps) {
  const { label, onSelect, checked, style } = props;
  return (
    <div>
      <label className="nes-checkbox-parent">
        <input
          type="checkbox"
          className="nes-checkbox"
          checked={checked}
          onChange={onSelect}
          style={style}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
