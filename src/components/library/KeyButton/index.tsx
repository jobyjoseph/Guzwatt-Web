import styles from "./styles.module.scss";

export const KeyButton = ({ children, onClick }) => {
  return (
    <button className={styles.keybutton} onClick={onClick}>
      {children}
    </button>
  );
};
