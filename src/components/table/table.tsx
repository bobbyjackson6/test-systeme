import { TableHTMLAttributes } from "react";
import styles from "./styles.module.css";

export type TableProps = TableHTMLAttributes<HTMLTableElement> & {
    children: React.ReactElement | React.ReactElement[];
}

export const Table = ({ children }: TableProps) => {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};
