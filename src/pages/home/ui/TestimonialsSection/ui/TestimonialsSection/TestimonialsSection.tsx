// react
import { FC } from "react";
// styles
import styles from "./TestimonialsSection.module.scss";
// ui
import { TestimonialsSectionList } from "../TestimonialsSectionList/TestimonialsSectionList";
// items
import { testimonials } from "../../model/items/TestimonialsSectionItems";

interface TestimonialsSectionProps {}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({}) => {
  return (
    <div className={styles.TestimonialsSection}>
      <div className={styles.wrapper}>
        <div className={styles.title}>OUR HAPPY CUSTOMERS</div>
        <TestimonialsSectionList items={testimonials} />
      </div>
    </div>
  );
};
