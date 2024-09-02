// react
import { FC } from "react";
// ui
import { Button } from "@/shared/ui/Button";
// assets
import preparation from "@/shared/libs/assets/images/png/preparation.png";
import whiteArrow from "@/shared/libs/assets/images/png/WhiteArrow.png";

// styles
import styles from "./PreparationSection.module.scss";

interface PreparationSectionProps {}

export const PreparationSection: FC<PreparationSectionProps> = ({}) => {
  return (
    <div className={styles.PreparationSection}>
      <div className={styles.sect}>
        <div className={styles.left}>
          <img src={preparation} alt="Preparation" />
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            Convenient and easy prep at home or on-the-go
          </div>
          <div className={styles.subtitle}>
            Your perfect earthy latte is waiting for you. Mix one scoop with hot
            water and add your choice of milk. Consume consistently for at least
            a month to feel the full benefits.
          </div>
          <Button
            icon={<img src={whiteArrow} alt="Arrow" />}
            colorVariant="black"
            textColor="white"
            onClick={() => {}}
            size="s"
          >
            Buy now
          </Button>
        </div>
      </div>
    </div>
  );
};
