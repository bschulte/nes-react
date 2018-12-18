import * as React from "react";

export interface CheckboxProps {
  checked: boolean;
  label: string;
  onSelect: () => void;
}

export default function CheckBox(props: CheckboxProps) {
  const { label, onSelect, checked } = props;
  return (
    <div>
      <label className="nes-checkbox-parent">
        <input
          type="checkbox"
          className="nes-checkbox"
          checked={checked}
          onChange={onSelect}
        />
        <span>{label}</span>
      </label>
    </div>
  );
}
