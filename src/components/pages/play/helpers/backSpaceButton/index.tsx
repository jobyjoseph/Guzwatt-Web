import styles from "./backSpaceButton.module.scss";

export const BackSpaceButton = ({
  handleKeyClick,
}: {
  handleKeyClick: any;
}) => {
  return (
    <button
      className={styles?.key}
      onClick={() => {
        handleKeyClick();
      }}
    >
      &#9003;
    </button>
  );
};
