import styles from "./styles.module.scss";
import { ReactNode } from "react";

type KeyButtonProps = {
  children: ReactNode;
  onClick?: any;
};

export const KeyButton = ({ children, onClick }: KeyButtonProps) => {
  return (
    <button className={styles.keybutton} onClick={onClick}>
      {children}
    </button>
  );
};
