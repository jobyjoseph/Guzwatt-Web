export const scrambleString = (inputString: string) => {
  // Convert the input string into an array of characters
  let characters = inputString.split("");

  // Use the Fisher-Yates algorithm to shuffle the characters randomly
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [characters[i], characters[j]] = [characters[j], characters[i]];
  }

  // Join the shuffled characters back into a string
  return characters.join("");
};
