export const getGameQuestions = (words: any, questionIndices: number[]) => {
  const gameQuestions = [];
  for (let i = 0; i < questionIndices?.length; i++) {
    const questionIndex = questionIndices[i];
    gameQuestions.push(words[questionIndex]);
  }
  return gameQuestions;
};
