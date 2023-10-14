import styles from "./styles.module.scss";
import { ReactNode, useState } from "react";

type KeyButtonProps = {
  children: ReactNode;
  onClick?: any;
};

export const KeyButton = ({ children, onClick }: KeyButtonProps) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <button
      className={styles.keybutton}
      onClick={() => {
        setDisabled(true);
        onClick();
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
