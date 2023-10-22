import { getRandomIntegers } from "@/utils/getRandomIntegers";
import { words } from "@/data/words";
import { getGameQuestions } from "@/utils/getGameQuestions";
import { PlayPage } from "@/components/pages/play/index";

export default function Play() {
  return <PlayPage />;
}

export const getServerSideProps = async () => {
  const questionIndices = getRandomIntegers(0, 10, 5);
  const gameQuestions = getGameQuestions(words, questionIndices);

  console.log({ gameQuestions });
  return {
    props: {},
  };
};
