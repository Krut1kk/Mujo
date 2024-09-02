// react
import { FC } from "react";
// assets
import coffePng from "@/shared/libs/assets/images/png/coffee.png";
// styles
import styles from "./CoreSection.module.scss";

interface CoreSectionProps {}

export const CoreSection: FC<CoreSectionProps> = ({}) => {
  return (
    <div className={styles.CoreSection}>
      <div className={styles.content}>
        <div className={styles.box1}>
          <div className={styles.coffeDescItem}>
            <div className={styles.title}>No Funny Stuff</div>
            <div className={styles.description}>
              Researched, tested, and traceable. No added sugars or sneaky
              sweeteners, “natural” or artificial flavors, and no mycelium
              biomasses.
            </div>
          </div>
        </div>
        <div className={styles.box2}>
          <img src={coffePng} alt="" />
        </div>
        <div className={styles.box3}>
          <div className={styles.coffeDescItem}>
            <div className={styles.title}>Premium ingredients only</div>
            <div className={styles.description}>
              Standardized full-spectrum botanical extracts, potent adaptogens
              and medicinal mushrooms made 100% from fruiting bodies.
            </div>
          </div>
        </div>
        <div className={styles.box4}>
          <div className={styles.coffeDescItem}>
            <div className={styles.title}>Dosed for effectiveness</div>
            <div className={styles.description}>
              Each of the key eleven ingredients has been dosed for
              effectiveness to deliver science-backed benefits. Drink
              consistency for a month to experience the full effects.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
