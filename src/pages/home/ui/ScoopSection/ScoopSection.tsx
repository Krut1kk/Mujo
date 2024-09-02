// react
import { FC } from "react";
// styles
import styles from "./ScoopSection.module.scss";

interface ScoopSectionProps {}

export const ScoopSection: FC<ScoopSectionProps> = ({}) => {
  return (
    <div className={styles.ScoopSection}>
      <div className={styles.scoop}>
        <div className={styles.bold}>ONE SCOOP</div>
        <div className={styles.outline}>ONCE A DAY</div>
      </div>
    </div>
  );
};
