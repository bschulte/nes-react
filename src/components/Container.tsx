import * as React from "react";
import classNames from "classnames";

export type Props = { text: string };

interface ContainerProps {
  children: any;
  style: any;
  withTitle: boolean;
  dark: boolean;
  rounded: boolean;
}

export default class Container extends React.Component<ContainerProps, {}> {
  render() {
    const { children, style, withTitle, dark, rounded } = this.props;
    return (
      <section
        className={classNames("container", {
          withTitle,
          "is-dark": dark,
          "is-rounded": rounded
        })}
        style={style}
      >
        {children}
      </section>
    );
  }
}
