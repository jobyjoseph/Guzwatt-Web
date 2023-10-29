import styles from "./letterButton.module.scss";

export const LetterButton = ({
  value,
  id,
  handleKeyClick,
  children,
  isDisabled = false,
}: {
  value: string;
  id: number;
  handleKeyClick: any;
  children: any;
  isDisabled: boolean;
}) => {
  return (
    <button
      className={styles?.key}
      disabled={isDisabled}
      onClick={() => {
        handleKeyClick({
          letterId: id,
          letter: value,
        });
      }}
    >
      {children}
    </button>
  );
};
