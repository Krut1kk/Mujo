// react
import { ChangeEvent, FC, useState } from "react";
// ui
import { Input } from "@/shared/ui/Input";
// assets
import inst from "@/shared/libs/assets/images/svg/inst.svg";
import logoFooter from "@/shared/libs/assets/images/png/LogoFooter.png";
import arrow from "@/shared/libs/assets/images/svg/arrow.svg";
// styles
import styles from "./Footer.module.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <div className={styles.title}>Follow us </div>
            <div className={styles.wrapper}>
              <img src={inst} alt="instagram" />
              <div className={styles.text}>@MUJO.LIFE</div>
            </div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>products</div>
            <div className={styles.text}>Vital Force</div>
            <div className={styles.text}>Balance</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>Why mujo</div>
            <div className={styles.text}>Ingredients</div>
            <div className={styles.text}>Science</div>
            <div className={styles.text}>Blog</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>Company</div>
            <div className={styles.text}>About us</div>
            <div className={styles.text}>Contact</div>
            <div className={styles.text}>FAQ</div>
          </div>
          <div className={styles.contact}>
            <div className={styles.title}>Stay in touch</div>
            <div className={styles.text}>
              <Input
                value={email}
                onChange={handleInputChange}
                placeholder="Email address"
                icon={<img src={arrow} alt="Arrow" />}
              />
            </div>
            <div className={styles.checkboxContainer}>
              <input type="checkbox" />
              <div>
                Subscribe to receive communications from Mujo about our
                products. By subscribing, you confirm you have read and accept
                our privacy policy
              </div>
            </div>
          </div>
        </div>

        <div className={styles.logoFooter}>
          <img src={logoFooter} alt="MUJO" />
        </div>

        <div className={styles.prebottom}>
          <div className={styles.prebottomleft}>© 2023 MUJO</div>
          <div className={styles.prebottomTitle}>brew a change from within</div>
          <div className={styles.prebottomRight}>
            <div>Terms of service</div>
            <div>Privacy policy</div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomup}>
            *These statements have not been evaluated by the Food and Drug
            Administration. This product is not intended to diagnose, treat,
            cure or prevent any disease
          </div>
          <div className={styles.dawn}>
            Information on this site is provided for informational purposes
            only. It is not meant to substitute for medical advice from your
            physician or other medical professional. You should not use the
            information contained herein for diagnosing or treating a health
            problem or disease, or prescribing any medication. Carefully read
            all product documentation. If you have or suspect that you have a
            medical problem, promptly contact your regular health care provider.
          </div>
        </div>
      </div>
    </div>
  );
};
