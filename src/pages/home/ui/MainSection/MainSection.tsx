// react
import { FC } from "react";
import logo from "@/shared/libs/assets/images/png/mainLogo.png";
import video from "@/shared/libs/assets/videos/video.mp4";
// styles
import styles from "./MainSection.module.scss";

interface MainSectionProps {}

export const MainSection: FC<MainSectionProps> = ({}) => {
  return (
    <div className={styles.MainSection}>
      <div className={styles.container}>
        <div className={styles.topBlock}>
          <div className={styles.topContent}>
            <img src={logo} alt="" />

            <div className={styles.description}>
              <div></div>
              <div className={styles.desc1}>
                Get more done <br /> and stress less
              </div>
              <div className={styles.desc2}>
                All-natural, functional <br /> coffee alternative
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomContent}>
          <div className={styles.videoContainer}>
            <video src={video} />
          </div>
        </div>
      </div>
    </div>
  );
};
