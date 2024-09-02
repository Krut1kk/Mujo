// styles

import { TestimonialsSection } from "../TestimonialsSection/ui/TestimonialsSection/TestimonialsSection";
import { HeroSection } from "../HeroSection/HeroSection";
import styles from "./Home.module.scss";
import { IntroSection } from "../IntroSection/IntroSection";
import { BenefitsSection } from "../BenefitsSection/BenefitsSection";
import { PreparationSection } from "../PreparationSection/PreparationSection";
import { AboutSection } from "../AboutSection/AboutSection";
import { Footer } from "@/widgets/footer";
import { MainSection } from "../MainSection/MainSection";
import { ScoopSection } from "../ScoopSection/ScoopSection";
import { CoreSection } from "../CoreSection/CoreSection";

export const Home = ({}) => {
  return (
    <div className={styles.HomePage}>
      <MainSection />
      <IntroSection />
      <CoreSection />
      <BenefitsSection />
      <ScoopSection />
      <PreparationSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
};
