import * as React from "react";
import classNames from "classnames";

export interface AvatarProps {
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  rounded?: boolean;
  src: string;
<<<<<<< HEAD
  className?: string;
=======
  className: string;
>>>>>>> de02925822d00ec5e43724637cf6e710b7dddc39
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
