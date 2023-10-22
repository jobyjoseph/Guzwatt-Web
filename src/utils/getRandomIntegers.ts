export const getRandomIntegers = (
  rangeMin: number,
  rangeMax: number,
  count: number
) => {
  if (rangeMax - rangeMin < count) {
    throw "Range is less than count";
  }
  const randomIntegerArray: number[] = [];
  let counter = 0;
  while (true) {
    const randomNumber =
      Math.floor(Math.random() * (rangeMax - rangeMin)) + rangeMin;

    if (!randomIntegerArray?.includes(randomNumber)) {
      randomIntegerArray?.push(randomNumber);
      counter++;

      if (counter >= count) {
        break;
      }
    }
  }

  return randomIntegerArray;
};
