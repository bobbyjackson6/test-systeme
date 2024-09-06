import React, { HTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.css";
import { TCell, TCellProps } from "../tcell/tcell";

type TCellElement = React.ReactElement<TCellProps, typeof TCell>;

export type TRowProps = HTMLAttributes<HTMLTableRowElement> & {
  children: TCellElement | TCellElement[];
  className?: string;
};

export const TRow = ({ children, className }: TRowProps) => (
  <tr className={cn(styles.trow, className)}>{children}</tr>
);
