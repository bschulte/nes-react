import * as React from "react";
import classNames from "classnames";

export type Props = { text: string };

interface ContainerProps {
  children: any;
  style: any;
  withTitle: boolean;
  dark: boolean;
  rounded: boolean;
  centered: boolean;
}

export default class Container extends React.Component<ContainerProps, {}> {
  render() {
    const { children, style, withTitle, dark, rounded, centered } = this.props;
    return (
      <section
        className={classNames("nes-container", {
          withTitle,
          "is-dark": dark,
          "is-rounded": rounded,
          "is-centered": centered
        })}
        style={style}
      >
        {children}
      </section>
    );
  }
}
