import { KeyButton } from "@/components/library/KeyButton/index";

export const Keys = ({ handleCharBtnClick }) => {
  return (
    <div>
      <KeyButton
        onClick={() => {
          handleCharBtnClick("O");
        }}
      >
        O
      </KeyButton>
      <KeyButton
        onClick={() => {
          handleCharBtnClick("G");
        }}
      >
        G
      </KeyButton>
      <KeyButton
        onClick={() => {
          handleCharBtnClick("D");
        }}
      >
        D
      </KeyButton>
      <KeyButton>&lt;</KeyButton>
    </div>
  );
};
