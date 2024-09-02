// ui
import { NavLink } from "@/shared/ui/NavLink";
import { Button } from "@/shared/ui/Button";
// assets
import HeaderLogo from "@/shared/libs/assets/images/svg/logo.svg?react";
import WhiteArrow from "@/shared/libs/assets/images/png/WhiteArrow.png";
// constanst
import { getHomeRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.Header}>
      <nav className={styles.navLeft}>
        <NavLink to={getHomeRoute()}>WHY MUJO</NavLink>
        <NavLink to="#about">ABOUT</NavLink>
        <NavLink to="#journal">JOURNAL</NavLink>
      </nav>
      <div className={styles.logo}>
        <HeaderLogo />
      </div>
      <nav className={styles.navRight}>
        <NavLink to="#login">LOG IN</NavLink>
        <NavLink to="#cart">CART</NavLink>
        <div className={styles.btn}>
          <Button
            icon={<img src={WhiteArrow} alt="Arrow" />}
            colorVariant="black"
            textColor="white"
            onClick={() => {}}
            size="s"
          >
            Shop now
          </Button>
        </div>
        <div className={styles.burger}>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};
