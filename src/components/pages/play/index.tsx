import { RootLayout } from "@/components/layouts/layout";
import { useState } from "react";
import confetti from "canvas-confetti";
import styles from "./style.module.scss";
import { LetterButton } from "./helpers/letterButton";
import { BackSpaceButton } from "./helpers/backSpaceButton";
import { InputBox } from "./helpers/inputBox/index";

export function PlayPage() {
  const [inputArr, setInputArray] = useState<any[]>([]);
  const [answerStatus, setAnswerStatus] = useState("");
  const questionItem = {
    question:
      "A feeling of expectation and desire for a certain thing to happen",
    answer: "HOPE",
    scrambledAnswer: [
      {
        letterId: 1,
        letter: "E",
      },
      {
        letterId: 2,
        letter: "H",
      },
      {
        letterId: 3,
        letter: "O",
      },
      {
        letterId: 4,
        letter: "P",
      },
    ],
  };
  const [currentQuestion, setCurrentQuestion] = useState(questionItem);

  const handleKeyClick = (letterObj: any) => {
    setAnswerStatus("");

    const arr = [...inputArr, letterObj];
    if (arr.length >= currentQuestion?.answer?.length) {
      arr.length = currentQuestion?.answer?.length;
    }

    setInputArray(arr);
  };

  const handleSubmit = () => {
    let inputAnswer = "";
    for (let i = 0; i < inputArr?.length; i++) {
      inputAnswer = inputAnswer + inputArr?.[i]?.letter;
    }
    if (inputAnswer === questionItem?.answer) {
      setAnswerStatus("correct");
      confetti();
    } else {
      setAnswerStatus("wrong");
    }
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
              return <InputBox key={index}></InputBox>;
            } else {
              return (
                <InputBox key={index} answerStatus={answerStatus}>
                  {inputArr?.[index]?.letter}
                </InputBox>
              );
            }
          })}
        </span>
      </div>
      <div className={styles?.keysWrapper}>
        {currentQuestion?.scrambledAnswer?.map((item, index) => {
          let isDisabled = false;
          inputArr?.forEach((inputItem) => {
            if (inputItem?.letterId === item?.letterId) {
              isDisabled = true;
            }
          });
          return (
            <LetterButton
              value={item?.letter}
              id={item?.letterId}
              key={index}
              handleKeyClick={handleKeyClick}
              isDisabled={isDisabled}
            >
              {item?.letter}
            </LetterButton>
          );
        })}

        <BackSpaceButton handleKeyClick={handleBackspaceClick} />
      </div>
      <div className={styles?.submitButtonWrapper}>
        <button
          onClick={handleSubmit}
          disabled={questionItem?.scrambledAnswer?.length !== inputArr?.length}
        >
          SUBMIT
        </button>
      </div>
    </RootLayout>
  );
}
