import * as React from "react";

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

export default class TextArea extends React.Component<TextInputProps> {
  public render() {
    const { label, value, onChange } = this.props;
    return (
      <div>
        {label && <label>{label}</label>}
        <textarea
          value={value}
          onChange={onChange}
          className={"nes-textarea"}
        />
      </div>
    );
  }
}
