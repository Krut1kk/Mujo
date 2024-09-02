// react
import { FC } from "react";
// ui
import { Button } from "@/shared/ui/Button";
// assets
import WhiteArrow from "@/shared/libs/assets/images/png/WhiteArrow.png";
import Benefit from "@/shared/libs/assets/images/svg/benefits.svg?react";
import Benefit1 from "@/shared/libs/assets/images/svg/benefits1.svg?react";
import Benefit2 from "@/shared/libs/assets/images/svg/benefits2.svg?react";
// styles
import styles from "./BenefitsSection.module.scss";

interface BenefitsSectionProps {}

export const BenefitsSection: FC<BenefitsSectionProps> = ({}) => {
  return (
    <div className={styles.BenefitsSection}>
      <div className={styles.content}>
        <div className={styles.title}>Science backed BENEFITS</div>
        <div className={styles.subtitle}>
          Each ingredient serves a unique function in reviving your vitality at
          the cellular level. No fillers, no nonsense.
        </div>
        <div className={styles.btn}>
          <Button
            icon={<img src={WhiteArrow} alt="Arrow" />}
            colorVariant="white"
            textColor="white"
            onClick={() => {}}
            size="m"
          >
            Learn more
          </Button>
        </div>
      </div>
      <div className={styles.benefits}>
        <div className={styles.benefit}>
          <div>
            <Benefit />
          </div>
          <div>Focus and cognition</div>
        </div>
        <div className={styles.benefit}>
          <div>
            <Benefit1 />
          </div>
          <div>Stress management</div>
        </div>
        <div className={styles.benefit}>
          <div>
            <Benefit />
          </div>
          <div>Natural energy</div>
        </div>
        <div className={styles.benefit}>
          <div>
            <Benefit2 />
          </div>
          <div>Immunity support</div>
        </div>
      </div>
    </div>
  );
};
