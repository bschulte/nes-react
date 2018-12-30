import * as React from "react";
import classNames from "classnames";

export interface RadiosProps {
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  onValueChange: (value: string) => void;
  className?: string;
}

const Radios: React.SFC<RadiosProps> = ({ className, options, selectedValue, onValueChange, ...other }) => (
  <div>
    {options.map((option, index) => (
      <label
        key={index}
        className="nes-radio-group"
        onClick={() => onValueChange(option.value)}
      >
        <input
          type="radio"
          className={classNames(className, "nes-radio")}
          value={option.value}
          checked={option.value === selectedValue}
          onChange={() => {}}
          {...other}
        />
        <span>{option.label}</span>
      </label>
    ))}
  </div>
);

export default Radios
