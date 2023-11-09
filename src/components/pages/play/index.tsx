import { RootLayout } from "@/components/layouts/layout";
import { useState } from "react";
import confetti from "canvas-confetti";
import styles from "./style.module.scss";
import { LetterButton } from "./helpers/letterButton";
import { BackSpaceButton } from "./helpers/backSpaceButton";
import { InputBox } from "./helpers/inputBox/index";

export function PlayPage({ gameQuestions }: { gameQuestions: any }) {
  const [inputArr, setInputArray] = useState<any[]>([]);
  const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
  const [answerStatus, setAnswerStatus] = useState("");
  const [showKeySection, setShowKeySection] = useState(true);
  const [showSubmitButton, setShowSubmitButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showViewScoreButton, setShowViewScoreButton] = useState(false);
  const [showPlayAgainButton, setShowPlayAgainButton] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [currentQuestionNo, setCurrentQuestionNo] = useState(0);
  const currentQuestion = gameQuestions[currentQuestionNo];

  const handleKeyClick = (letterObj: any) => {
    setAnswerStatus("");

    const arr = [...inputArr, letterObj];
    if (arr.length >= currentQuestion?.answer?.length) {
      arr.length = currentQuestion?.answer?.length;
    }
    console.log(arr);
    console.log(currentQuestion?.scrambledAnswer);
    setInputArray(arr);
  };

  const handleSubmit = () => {
    setShowKeySection(false);
    setShowSubmitButton(false);
    let inputAnswer = "";
    for (let i = 0; i < inputArr?.length; i++) {
      inputAnswer = inputAnswer + inputArr?.[i]?.letter;
    }
    if (inputAnswer === currentQuestion?.answer) {
      setAnswerStatus("correct");
      setCorrectAnswerCount(correctAnswerCount + 1);
      confetti();
    } else {
      setAnswerStatus("wrong");
    }

    // Show score button if all questions done
    if (currentQuestionNo === gameQuestions?.length - 1) {
      setShowViewScoreButton(true);
    } else {
      setShowNextButton(true);
    }
  };

  const handleNext = () => {
    setCurrentQuestionNo(currentQuestionNo + 1);
    setAnswerStatus("");
    setInputArray([]);
    setShowKeySection(true);
    setShowSubmitButton(true);
    setShowNextButton(false);
  };

  const handleViewScore = () => {
    setShowScore(true);
    setShowPlayAgainButton(true);
    setShowViewScoreButton(false);
  };

  const handlePlayAgain = () => {
    window?.location?.reload();
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
      {!showScore ? (
        <>
          <div>
            <span className={styles?.slno}>
              {currentQuestionNo + 1} / {gameQuestions?.length}
            </span>
          </div>
          <div className={styles?.question}>{currentQuestion?.question}</div>
          <div className={styles?.inputBoxWrapper}>
            <span className={styles?.wordWrapper}>
              {currentQuestion?.answer
                ?.split("")
                ?.map((item: any, index: number) => {
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

            {answerStatus === "wrong" && (
              <div>
                <span className={styles?.wordWrapper}>
                  {currentQuestion?.answer
                    ?.split("")
                    ?.map((item: any, index: number) => {
                      return (
                        <InputBox key={index} answerStatus="correct">
                          {item}
                        </InputBox>
                      );
                    })}
                </span>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className={styles?.scoreWrapper}>
          <h1>Your Score</h1>
          <div className={styles?.score}>
            {correctAnswerCount} / {gameQuestions?.length}
          </div>
        </div>
      )}
      {showKeySection && (
        <div className={styles?.keysWrapper}>
          {currentQuestion?.scrambledAnswer?.map((item: any, index: number) => {
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
      )}
      {showSubmitButton && (
        <div className={styles?.submitButtonWrapper}>
          <button
            onClick={handleSubmit}
            disabled={
              currentQuestion?.scrambledAnswer?.length !== inputArr?.length
            }
          >
            SUBMIT
          </button>
        </div>
      )}
      {showNextButton && (
        <div className={styles?.submitButtonWrapper}>
          <button onClick={handleNext}>NEXT</button>
        </div>
      )}
      {showViewScoreButton && (
        <div className={styles?.submitButtonWrapper}>
          <button onClick={handleViewScore}>VIEW SCORE</button>
        </div>
      )}
      {showPlayAgainButton && (
        <div className={styles?.submitButtonWrapper}>
          <button onClick={handlePlayAgain}>PLAY AGAIN</button>
        </div>
      )}
    </RootLayout>
  );
}
