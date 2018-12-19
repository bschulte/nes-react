import * as React from "react";

export interface BcrikkoProps {
  style: any;
}

export default class Bcrikko extends React.Component<BcrikkoProps, any> {
  public render() {
    const { style } = this.props;
    return <i className="nes-bcrikko" style={style} />;
  }
}
