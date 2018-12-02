import * as React from "react";
import classNames from "classnames";

export interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: () => void;
  success: boolean;
  warning: boolean;
  error: boolean;
  labelInline: boolean;
}

export default class IApp extends React.Component<TextInputProps> {
  public render() {
    const {
      label,
      placeholder,
      success,
      warning,
      error,
      value,
      onChange,
      labelInline
    } = this.props;
    return (
      <div className={classNames("field", { "is-inline": labelInline })}>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder || ""}
          className={classNames("input", {
            "is-success": success,
            "is-warning": warning,
            "is-error": error
          })}
        />
      </div>
    );
  }
}
