import * as React from "react";
import classNames from "classnames";

export interface ProgressProps {
  style: any;
  value: number;
  max: number;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
  pattern: boolean;
}

export default class Progress extends React.Component<ProgressProps, any> {
  public render() {
    const {
      style,
      value,
      max,
      primary,
      success,
      warning,
      error,
      pattern
    } = this.props;
    return (
      <progress
        style={style}
        value={value}
        max={max}
        className={classNames("nes-progress", {
          "is-primary": primary,
          "is-success": success,
          "is-warning": warning,
          "is-error": error,
          "is-pattern": pattern
        })}
      />
    );
  }
}
