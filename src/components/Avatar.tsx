import * as React from "react";
import classNames from "classnames";

export interface AvatarProps {
  small: boolean;
  medium: boolean;
  large: boolean;
  rounded: boolean;
  src: string;
  style: any;
}

export default class Avatar extends React.Component<AvatarProps, any> {
  public render() {
    const { src, small, medium, large, rounded, style } = this.props;
    return (
      <img
        src={src}
        className={classNames("nes-avatar", {
          "is-small": small,
          "is-medium": medium,
          "is-large": large,
          "is-rounded": rounded
        })}
        style={style}
      />
    );
  }
}
