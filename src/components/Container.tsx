import * as React from "react";
import classNames from "classnames";

export interface ContainerProps {
  children: React.ReactNode;
  title?: string;
  dark?: boolean;
  rounded?: boolean;
  centered?: boolean;
  className?: boolean;
}

const Container: React.SFC<ContainerProps> = ({ children, className, dark, rounded, centered, title, ...other }) => (
  <section
    className={classNames(className, "nes-container", {
      "with-title": title,
      "is-dark": dark,
      "is-rounded": rounded,
      "is-centered": centered
    })}
    {...other}
  >
    {title && <h2 className="title">{title}</h2>}
    {children}
  </section>
);

export default Container;
