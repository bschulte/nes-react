import * as React from "react";
import classNames from 'classnames'

export interface TextAreaProps {
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

const TextArea: React.SFC<TextAreaProps> = ({ label, value, onChange, success, warning, error, placeholder, labelInline, ...other }) => (
  <div className={classNames("nes-field", { "is-inline": labelInline })} >
    {label && <label>{label}</label>}
    <textarea
      value={value}
      onChange={onChange}
      className={classNames("nes-textarea",{
        "is-success": success,
        "is-warning": warning,
        "is-error": error
      })}
      placeholder={placeholder}
      {...other}
    />
  </div>
);

export default TextArea;
