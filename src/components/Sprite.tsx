import * as React from "react";
import classNames from "classnames";

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
  className?: string;
}

const Sprite: React.SFC<SpriteProps> = ({ sprite, className, ...other }) => (
  <i className={classNames(className, `nes-${sprite}`)} {...other} />
);

export default Sprite;
