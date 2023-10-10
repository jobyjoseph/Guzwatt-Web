import { useState } from "react";
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

  const answerLength = questionData?.answer?.length;
  const [answerInput, setAnswerInput] = useState(
    new Array(answerLength).fill("-")
  );
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
        <Keys handleCharBtnClick={handleCharBtnClick} />
      </div>
      <div>
        <SubmitButton onClick={handleSubmitButtonClick} />
      </div>
    </div>
  );
};
