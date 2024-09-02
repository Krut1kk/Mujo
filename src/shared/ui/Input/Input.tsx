// react
import { ChangeEvent, FC, ReactNode } from "react";

// styles
import styles from "./Input.module.scss";

interface InputProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: ReactNode;
}

export const Input: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  icon,
}) => {
  return (
    <div className={styles.inputContainer}>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      {icon && <div className={styles.icon}>{icon}</div>}
    </div>
  );
};
