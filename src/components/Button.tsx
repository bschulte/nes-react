import * as React from "react";
import classNames from "classnames";

export interface ButtonProps {
  children: any;
  primary?: boolean;
  success?: boolean;
  warning?: boolean;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.SFC<ButtonProps> = ({ children, className, primary, success, warning, error, disabled, ...other }) => (
  <button
    className={classNames(className, "nes-btn", {
      "is-primary": primary,
      "is-success": success,
      "is-warning": warning,
      "is-error": error,
      "is-disabled": disabled
    })}
    {...other}
  >
    {children}
  </button>
)

export default Button;
