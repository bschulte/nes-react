import * as React from "react";

export interface RadiosProps {
  options: Array<{ value: string; label: string }>;
  selectedValue: string;
  onValueChange: (value: string) => void;
  style: any;
}

export default class Radios extends React.Component<RadiosProps, any> {
  public render() {
    const { options, selectedValue, onValueChange, style } = this.props;
    return (
      <div>
        {options.map((option, index) => (
          <label
            key={index}
            className="nes-radio-group"
            onClick={() => onValueChange(option.value)}
          >
            <input
              type="radio"
              className="nes-radio"
              value={option.value}
              checked={option.value === selectedValue}
              onChange={() => {}}
              style={style}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    );
  }
}
