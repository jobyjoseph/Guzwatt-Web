import { RootLayout } from "@/components/layouts/layout";
import { useState } from "react";
import confetti from "canvas-confetti";
import styles from "./style.module.scss";

const LetterButton = ({
  letter,
  handleKeyClick,
}: {
  letter: string;
  handleKeyClick: any;
}) => {
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <button
      className={styles?.key}
      disabled={isDisabled}
      onClick={() => {
        setIsDisabled(true);
        handleKeyClick(letter);
      }}
    >
      {letter}
    </button>
  );
};

export function PlayPage() {
  const [inputArr, setInputArray] = useState<string[]>([]);
  const questionItem = {
    question:
      "A feeling of expectation and desire for a certain thing to happen",
    answer: "HOPE",
    scrambledAnswer: [
      {
        btnId: 1,
        letter: "E",
      },
      {
        btnId: 2,
        letter: "H",
      },
      {
        btnId: 3,
        letter: "O",
      },
      {
        btnId: 1,
        letter: "E",
      },
    ],
  };
  const [currentQuestion, setCurrentQuestion] = useState(questionItem);

  const handleKeyClick = (letter: string) => {
    const arr = [...inputArr, letter];
    if (arr.length >= currentQuestion?.answer?.length) {
      arr.length = currentQuestion?.answer?.length;
    }
    console.log(arr);

    setInputArray(arr);
  };

  const showConfetti = () => {
    confetti();
  };

  const handleBackspaceClick = () => {
    const arr = [...inputArr];

    if (arr.length <= 0) {
      return;
    }
    arr.length = arr.length - 1;
    setInputArray(arr);
  };

  return (
    <RootLayout>
      <div>
        <span className={styles?.slno}>#1</span>
      </div>
      <div className={styles?.question}>{currentQuestion?.question}</div>
      <div className={styles?.inputBoxWrapper}>
        <span className={styles?.wordWrapper}>
          {currentQuestion?.answer?.split("")?.map((item, index) => {
            if (!inputArr?.[index]) {
              return <span key={index} className={styles?.inputBox}></span>;
            } else {
              return (
                <span key={index} className={styles?.inputBox}>
                  {inputArr?.[index]}
                </span>
              );
            }
          })}
        </span>
      </div>
      <div className={styles?.keysWrapper}>
        {currentQuestion?.scrambledAnswer?.map((item, index) => {
          return (
            <LetterButton
              letter={item?.letter}
              key={index}
              handleKeyClick={handleKeyClick}
            />
          );
        })}

        <button
          className={`${styles?.key} ${styles?.backspace}`}
          key="backspace"
          onClick={handleBackspaceClick}
        >
          &#9003;
        </button>
      </div>
      <div className={styles?.submitButtonWrapper}>
        <button onClick={showConfetti}>SUBMIT</button>
      </div>
    </RootLayout>
  );
}
