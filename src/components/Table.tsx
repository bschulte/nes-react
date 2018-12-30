import * as React from "react";
import classNames from "classnames";

export interface TableProps {
  bordered?: boolean;
  centered?: boolean;
  dark?: boolean;
  chilren?: React.ReactNode;
  className?: string;
}

const Table: React.SFC<TableProps> = ({ bordered, centered, dark, children, className, ...other }) => (
  <table
    className={classNames(className, "nes-table", {
      "is-bordered": bordered,
      "is-centered": centered,
      "is-dark": dark
    })}
    {...other}
  >
    {children}
  </table>
);

export default Table;
