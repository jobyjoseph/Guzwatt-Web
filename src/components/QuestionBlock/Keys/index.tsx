import { KeyButton } from "@/components/library/KeyButton/index";

type KeysProps = {
  handleCharBtnClick: any;
  handleBackSpaceBtnClick: any;
  scrambledAnswer: string;
};

export const Keys = ({
  handleCharBtnClick,
  handleBackSpaceBtnClick,
  scrambledAnswer,
}: KeysProps) => {
  return (
    <div>
      {scrambledAnswer?.split("")?.map((char, index) => {
        return (
          <KeyButton
            onClick={() => {
              handleCharBtnClick(char);
            }}
            key={index}
          >
            {char}
          </KeyButton>
        );
      })}

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
