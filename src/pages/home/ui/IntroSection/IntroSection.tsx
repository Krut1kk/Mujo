// react
import { FC } from "react";
// ui
import { Button } from "@/shared/ui/Button";
// assets
import coffee from "@/shared/libs/assets/images/png/coffee1.png";
import arrow from "@/shared/libs/assets/images/svg/blackarrow.svg";
// styles
import styles from "./IntroSection.module.scss";

interface IntroSectionProps {}

export const IntroSection: FC<IntroSectionProps> = ({}) => {
  return (
    <div className={styles.IntroSection}>
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.line}>YOUR NEW</div>
          <div className={styles.line}>MORNING</div>
          <div className={styles.line}>RITUAL</div>
        </div>
        <div className={styles.subtitle}>
          Our coffee-like beverages are packed with the most effective <br />
          bioavailable forms of adaptogens and 1/20th of caffeine <br /> content
          of a cup of coffee.
        </div>
        <div className={styles.btn}>
          <div className={styles.text}>About our Ingredients</div>
          <div>
            <Button
              icon={<img src={arrow} alt="Arrow" />}
              colorVariant="white"
              textColor="black"
              onClick={() => {}}
              size="m"
            >
              Buy now
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <div>
          <img src={coffee} alt="coffee" />
        </div>
      </div>
    </div>
  );
};
