import styles from "./styles.module.scss";

type BlanksProps = {
  answerInput: Array<string>;
};

export const Blanks = ({ answerInput }: BlanksProps) => {
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
