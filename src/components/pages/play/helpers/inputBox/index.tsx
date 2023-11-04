import styles from "./inputBox.module.scss";

export const InputBox = ({
  children,
  answerStatus,
}: {
  children?: any;
  answerStatus?: string;
}) => {
  return (
    <span className={`${styles?.inputBox} ${styles?.[answerStatus || ""]}`}>
      {children}
    </span>
  );
};
