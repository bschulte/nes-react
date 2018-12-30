import * as React from "react";
import classNames from "classnames";

export interface ControllerIconProps {
  controller: "snes" | "snes-jp" | "nes" | "nes-jp";
  className?: string;
}

const ControllerIcon: React.SFC<ControllerIconProps> = ({ controller, className, ...other }) => (
  <i className={classNames(className,`${controller}-logo`)} {...other}/>
);

export default ControllerIcon;
