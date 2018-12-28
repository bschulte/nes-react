import * as React from "react";

export interface ControllerIconProps {
  controller: "snes" | "snes-jp" | "nes" | "nes-jp";
  style?: any;
}

export default class ControllerIcon extends React.Component<
  ControllerIconProps,
  any
> {
  public render() {
    const { controller, style } = this.props;
    return <i className={`${controller}-logo`} style={style} />;
  }
}
