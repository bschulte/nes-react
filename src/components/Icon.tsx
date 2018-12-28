import * as React from "react";
import classNames from "classnames";

export interface IconProps {
  icon:
    | "heart"
    | "star"
    | "like"
    | "twitter"
    | "facebook"
    | "github"
    | "youtube"
    | "google"
    | "medium"
    | "twitch"
    | "reddit"
    | "whatsapp"
    | "gmail"
    | "linkedin"
    | "close"
    | "trophy";
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  empty?: boolean;
  transparent?: boolean;
  half?: boolean;
  style?: any;
}

export default class Icon extends React.Component<IconProps, any> {
  public render() {
    const {
      style,
      icon,
      small,
      medium,
      large,
      empty,
      transparent,
      half
    } = this.props;
    return (
      <i
        className={classNames("nes-icon", icon, {
          "is-small": small,
          "is-medium": medium,
          "is-large": large,
          // These two seem better named to be switched to me
          "is-transparent": empty,
          "is-empty": transparent,
          "is-half": half
        })}
        style={style}
      />
    );
  }
}
