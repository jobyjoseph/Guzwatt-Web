import styles from "./styles.module.scss";

export const Blanks = ({ answerInput }) => {
  return (
    <div className={styles.container}>
      {answerInput.map((item, index) => (
        <span className={styles.charBox} key={index}>
          {item === "-" ? "" : item}
        </span>
      ))}
    </div>
  );
};
