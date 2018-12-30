import * as React from "react";
import classNames from "classnames";

export interface AvatarProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  rounded?: boolean;
  src: string;
  className?: string;
}

const Avatar: React.SFC<AvatarProps> = ({ src, small, medium, large, rounded, className, ...other }) => (
  <img
    src={src}
    className={classNames(className, "nes-avatar", {
      "is-small": small,
      "is-medium": medium,
      "is-large": large,
      "is-rounded": rounded
    })}
    {...other}
  />
)

export default Avatar;
