// react
import { FC } from "react";
// styles
import styles from "./TestimonialsSectionCard.module.scss";

interface TestimonialsSectionCardProps {
  img: string;
  title: string;
  text: string;
}

export const TestimonialsSectionCard: FC<TestimonialsSectionCardProps> = ({
  img,
  title,
  text,
}) => {
  return (
    <div className={styles.TestimonialsSectionCard}>
      <div className={styles.stars}>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
        <div className={styles.star}>★</div>
      </div>
      <div className={styles.text}>{text}</div>
      <div className={styles.client}>
        <img src={img} alt={title} className={styles.clientImage} />
        <div className={styles.clientInfo}>
          <div className={styles.clientName}>{title}</div>
        </div>
      </div>
    </div>
  );
};
