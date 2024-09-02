import { ReactNode, FC } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  colorVariant: "white" | "black";
  textColor: "black" | "white";
  size: "s" | "m";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  colorVariant,
  textColor,
  icon,
  size,
}) => {
  return (
    <button
      className={classNames(styles.Button, {
        [styles.white]: colorVariant === "white",
        [styles.black]: colorVariant === "black",
        [styles.blackText]: textColor === "black",
        [styles.whiteText]: textColor === "white",
        [styles.s]: size === "s",
        [styles.m]: size === "m",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      <span className={styles.text}>{children}</span>
      {icon && <div className={styles.icon}>{icon}</div>}
    </button>
  );
};
