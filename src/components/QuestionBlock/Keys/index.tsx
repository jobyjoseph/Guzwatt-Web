import { KeyButton } from "@/components/library/KeyButton/index";

type KeysProps = {
  handleCharBtnClick: any;
};

export const Keys = ({ handleCharBtnClick }: KeysProps) => {
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
