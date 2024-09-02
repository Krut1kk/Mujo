// react
import { FC } from "react";
// ui
import { Button } from "@/shared/ui/Button";
// assets
import blackArrow from "@/shared/libs/assets/images/svg/blackarrow.svg";
import womanPhoto from "@/shared/libs/assets/images/png/woman.png";
// styles
import styles from "./AboutSection.module.scss";

interface AboutSectionProps {}

export const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <div className={styles.AboutSection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.title}>
            I couldn’t find an alternative so I made my own
          </div>
          <div className={styles.subtitle}>
            After becoming a mom and returning back to work, drinking coffee
            made me feel anxious, jittery and exhausted. I turned to adaptogens
            and the resulting blend left me feeling energized, productive and
            less stressed, and the bonus was I could enjoy it exactly like my
            latte ritual.
          </div>
          <Button
            icon={<img src={blackArrow} alt="Arrow" />}
            colorVariant="white"
            textColor="black"
            onClick={() => {}}
            size="m"
          >
            Learn more
          </Button>
        </div>
        <div className={styles.right}>
          <img src={womanPhoto} alt="WomanImg" />
        </div>
      </div>
    </div>
  );
};
