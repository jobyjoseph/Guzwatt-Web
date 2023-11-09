import { getRandomIntegers } from "@/utils/getRandomIntegers";
import { words } from "@/data/words";
import { getGameQuestions } from "@/utils/getGameQuestions";
import { PlayPage } from "@/components/pages/play/index";
import { scrambleString } from "@/utils/scrambleString";

export default function Play({ gameQuestions }: { gameQuestions: any }) {
  return <PlayPage gameQuestions={gameQuestions} />;
}

export const getServerSideProps = async () => {
  const questionIndices = getRandomIntegers(0, 2, 2);
  const gameQuestions = getGameQuestions(words, questionIndices);

  for (let i = 0; i < gameQuestions?.length; i++) {
    gameQuestions[i].answer = gameQuestions?.[i]?.answer?.toUpperCase();
    const scrambledAnswer = scrambleString(gameQuestions?.[i]?.answer);
    gameQuestions[i].scrambledAnswer = scrambledAnswer
      ?.split("")
      ?.map((letter, index) => {
        return {
          letterId: index + 1,
          letter,
        };
      });
  }

  console.log({ gameQuestions });
  return {
    props: {
      gameQuestions,
    },
  };
};
