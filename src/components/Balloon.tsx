import * as React from "react";
import classNames from "classnames";

export interface BalloonProps {
  fromLeft?: boolean;
  fromRight?: boolean;
  style?: any;
}

export default class Balloon extends React.Component<BalloonProps, any> {
  public render() {
    const { fromLeft, fromRight, children, style } = this.props;
    return (
      <div
        className={classNames("nes-balloon", {
          "from-left": fromLeft,
          "from-right": fromRight
        })}
        style={style}
      >
        {children}
      </div>
    );
  }
}
