// react
import { FC } from "react";
// ui
import { TestimonialsSectionCard } from "../TestimonialsSectionCard/TestimonialsSectionCard";
// styles
import styles from "./TestimonialsSectionList.module.scss";

interface TestimonialsSectionListProps {
  items: {
    text: string;
    name: string;
    imageSrc: string;
  }[];
}

export const TestimonialsSectionList: FC<TestimonialsSectionListProps> = ({
  items,
}) => {
  return (
    <div className={styles.TestimonialsSectionList}>
      {items.map((item, index) => (
        <TestimonialsSectionCard
          key={index}
          text={item.text}
          title={item.name}
          img={item.imageSrc}
        />
      ))}
    </div>
  );
};
