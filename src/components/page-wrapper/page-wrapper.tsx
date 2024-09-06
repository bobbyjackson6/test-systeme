import { Link } from "react-router-dom";

import styles from "./styles.module.css";

type PageWrapperProps = {
  children: React.ReactElement | React.ReactElement[];
};

export const PageWrapper = ({ children }: PageWrapperProps) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.navigation}>
        <Link to="/">Back to main page</Link>
      </div>
      <div className={styles.page}>{children}</div>
    </div>
  );
};
