import * as React from "react";
import classNames from "classnames";

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  labelInline?: boolean;
  className?: string;
}

const TextInput: React.SFC<
  TextInputProps & React.HTMLProps<HTMLInputElement>
> = ({
  label,
  placeholder,
  success,
  warning,
  error,
  value,
  onChange,
  labelInline,
  className,
  ...other
}) => (
  <div className={classNames("nes-field", { "is-inline": labelInline })}>
    {label && <label>{label}</label>}
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={classNames(className, "nes-input", {
        "is-success": success,
        "is-warning": warning,
        "is-error": error
      })}
      {...other}
    />
  </div>
);

export default TextInput;
