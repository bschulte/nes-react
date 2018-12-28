import * as React from "react";
import classNames from "classnames";

export type Props = { text: string };

interface ContainerProps {
  children: any;
  style?: any;
  title?: string;
  dark?: boolean;
  rounded?: boolean;
  centered?: boolean;
}

export default class Container extends React.Component<ContainerProps, {}> {
  render() {
    const { children, style, dark, rounded, centered, title } = this.props;
    return (
      <section
        className={classNames("nes-container", {
          "with-title": title,
          "is-dark": dark,
          "is-rounded": rounded,
          "is-centered": centered
        })}
        style={style}
      >
        {title && <h2 className="title">{title}</h2>}
        {children}
      </section>
    );
  }
}
