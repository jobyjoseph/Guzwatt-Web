"use client";
import { QuestionBlock } from "@/components/QuestionBlock/index";
import { ScoreBoard } from "@/components/ScoreBoard/index";
import { useEffect, useState } from "react";
import { words } from "@/data/words";

export default function Home() {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [isChallengeFinished, setIsChallengeFinished] = useState(false);
  useEffect(() => {
    if (currentQuestionNumber > 5) {
      setIsChallengeFinished(true);
    }
  }, [currentQuestionNumber]);
  return isChallengeFinished ? (
    <ScoreBoard />
  ) : (
    <QuestionBlock
      currentQuestionNumber={currentQuestionNumber}
      setCurrentQuestionNumber={setCurrentQuestionNumber}
      questionData={words?.[currentQuestionNumber - 1]}
    />
  );
}
