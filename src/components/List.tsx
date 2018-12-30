import * as React from "react";
import classNames from "classnames";

export interface ListProps {
  solid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const List: React.SFC<ListProps> = ({ children, solid, className, ...other }) => (
  <ul
    className={classNames(className, "nes-list", {
      "is-circle": !solid,
      "is-disc": solid
    })}
    {...other}
  >
    {children}
  </ul>
);

export default List;
