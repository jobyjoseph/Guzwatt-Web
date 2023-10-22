import { scrambleString } from "@/utils/scrambleString";
import { useEffect, useState } from "react";
import { Blanks } from "./Blanks/index";
import { Keys } from "./Keys/index";
import { Question } from "./Question/index";
import { SubmitButton } from "./Submit/index";

type QuestionBlockProps = {
  currentQuestionNumber: number;
  setCurrentQuestionNumber: any;
  questionData: any;
};

export const QuestionBlock = ({
  currentQuestionNumber,
  setCurrentQuestionNumber,
  questionData,
}: QuestionBlockProps) => {
  const handleSubmitButtonClick = () => {
    setCurrentQuestionNumber(currentQuestionNumber + 1);
  };

  const handleCharBtnClick = (charValue: string) => {
    const answerInputCopy = [...answerInput];
    for (let i = 0; i < answerInputCopy?.length; i++) {
      if (answerInputCopy?.[i] === "-") {
        answerInputCopy[i] = charValue;
        break;
      }
    }
    setAnswerInput(answerInputCopy);
  };

  const handleBackSpaceBtnClick = (charValue: string) => {
    const answerInputCopy = [...answerInput];
    for (let i = answerInputCopy?.length - 1; i >= 0; i--) {
      if (answerInputCopy?.[i] !== "-") {
        answerInputCopy[i] = "-";
        break;
      }
    }
    setAnswerInput(answerInputCopy);
  };

  const answerLength = questionData?.answer?.length;
  const [answerInput, setAnswerInput] = useState(
    new Array(answerLength).fill("-")
  );

  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [scrambledAnswer, setScrambledAnswer] = useState("");

  useEffect(() => {
    setScrambledAnswer(scrambleString(questionData?.answer?.toUpperCase()));
    const answerLength = questionData?.answer?.length;
    setAnswerInput(new Array(answerLength).fill("-"));
  }, [questionData?.answer]);

  useEffect(() => {
    setIsSubmitEnabled(false);
    let fillCount = 0;
    for (let i = 0; i < answerInput?.length; i++) {
      if (answerInput?.[i] !== "-") {
        fillCount++;
      }
    }
    if (fillCount === answerInput?.length) {
      setIsSubmitEnabled(true);
    }
  }, [answerInput]);

  return (
    <div>
      <div>#{currentQuestionNumber}</div>
      <div>
        <Question data={questionData?.question} />
      </div>
      <div>
        <Blanks answerInput={answerInput} />
      </div>
      <div>
        <Keys
          handleCharBtnClick={handleCharBtnClick}
          handleBackSpaceBtnClick={handleBackSpaceBtnClick}
          scrambledAnswer={scrambledAnswer}
        />
      </div>
      <div>
        <SubmitButton
          onClick={handleSubmitButtonClick}
          isSubmitEnabled={isSubmitEnabled}
        />
      </div>
    </div>
  );
};
