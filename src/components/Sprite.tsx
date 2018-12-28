import * as React from "react";

export interface SpriteProps {
  sprite:
    | "octocat"
    | "mario"
    | "ash"
    | "pokeball"
    | "bulbasaur"
    | "charmander"
    | "squirtle"
    | "smartphone"
    | "phone"
    | "kirby"
    | "bcrikko";
  style?: any;
}

export default class Sprite extends React.Component<SpriteProps, any> {
  public render() {
    const { style, sprite } = this.props;
    return <i style={style} className={`nes-${sprite}`} />;
  }
}
