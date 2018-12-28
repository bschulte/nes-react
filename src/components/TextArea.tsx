import * as React from "react";
import classNames from 'classnames'

export interface TextInputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  labelInline?: boolean;
  style?: any;
}

export default class TextArea extends React.Component<TextInputProps> {
  public render() {
    const { label, value, onChange, style, success, warning, error, placeholder, labelInline } = this.props;
    return (
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
          style={style}
        />
      </div>
    );
  }
}
