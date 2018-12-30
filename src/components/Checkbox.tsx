import * as React from "react";
import classNames from "classnames";

export interface CheckboxProps {
  checked?: boolean;
  label?: string;
  onSelect?: () => void;
  className?: string;
}


const Checkbox: React.SFC<CheckboxProps> = ({ label, onSelect, checked, className, ...other }) => (
  <div>
    <label className="nes-checkbox-parent">
      <input
        type="checkbox"
        className={classNames(className, "nes-checkbox")}
        checked={checked}
        onChange={onSelect}
        {...other}
      />
      <span>{label}</span>
    </label>
  </div>
);

export default Checkbox;
