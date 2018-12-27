import * as React from "react";
import classNames from "classnames";

export interface ListProps {
  solid?: boolean;
  style?: any;
}

export default class List extends React.Component<ListProps, any> {
  public render() {
    const { solid, style, children } = this.props;
    return (
      <ul
        className={classNames("nes-list", {
          "is-circle": !solid,
          "is-disc": solid
        })}
        style={style}
      >
        {children}
      </ul>
    );
  }
}
