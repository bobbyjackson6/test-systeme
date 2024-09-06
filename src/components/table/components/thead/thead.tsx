import { HTMLAttributes } from "react";
import cn from 'classnames';

import styles from "./styles.module.css";

export type THeadProps = HTMLAttributes<HTMLTableSectionElement> & {
  className?: string;
  rowClassName?: string;
};

export const THead: React.FC<THeadProps> = ({
  className,
  rowClassName,
  children,
}) => (
  <thead className={cn(styles.head, className)}>
    <tr className={cn(styles.row, rowClassName)}>{children}</tr>
  </thead>
);
