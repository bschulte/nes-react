import * as React from "react";
import classNames from "classnames";

export interface ProgressProps {
  style?: any;
  value: number;
  max: number;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  pattern?: boolean;
  className?: string
}

const Progress: React.SFC<ProgressProps> = ({ className, value, max, primary, success, warning, error, pattern, ...other }) => (
  <progress
    value={value}
    max={max}
    className={classNames(className, "nes-progress", {
      "is-primary": primary,
      "is-success": success,
      "is-warning": warning,
      "is-error": error,
      "is-pattern": pattern
    })}
    {...other}
  />
);

export default Progress;
