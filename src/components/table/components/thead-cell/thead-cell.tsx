import { ThHTMLAttributes } from "react";
import cn from "classnames";

import styles from "./styles.module.css";

export type THeadCellProps = ThHTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};

export const THeadCell = ({
  children,
  className,
}: THeadCellProps) => {
  return (
    <th className={cn(styles.tHeadCell, className)}>
      {children}
    </th>
  );
};
