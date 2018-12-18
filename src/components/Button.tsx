import * as React from "react";
import classNames from "classnames";

export type Props = { text: string };

interface ButtonProps {
  children: any;
  onClick: () => void;
  style: any;
  primary: boolean;
  success: boolean;
  warning: boolean;
  error: boolean;
}

export default class Button extends React.Component<ButtonProps, {}> {
  render() {
    const {
      children,
      style,
      onClick,
      primary,
      success,
      warning,
      error
    } = this.props;
    return (
      <button
        className={classNames("nes-btn", {
          "is-primary": primary,
          "is-success": success,
          "is-warning": warning,
          "is-error": error
        })}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
    );
  }
}
