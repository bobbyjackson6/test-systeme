import { TdHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

export type TCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  className?: string;
};

export const TCell = ({
  className,
  children,
}: TCellProps) => {
  return (
    <td
      className={cn(styles.tcell, className)}
    >
      {children}
    </td>
  );
};
