import { KeyButton } from "@/components/library/KeyButton/index";

type KeysProps = {
  handleCharBtnClick: any;
  handleBackSpaceBtnClick: any;
};

export const Keys = ({
  handleCharBtnClick,
  handleBackSpaceBtnClick,
}: KeysProps) => {
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
      <KeyButton
        onClick={() => {
          handleBackSpaceBtnClick();
        }}
      >
        &lt;
      </KeyButton>
    </div>
  );
};
