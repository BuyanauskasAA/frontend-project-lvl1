import readlineSync from 'readline-sync';
import { getRandomInt, getProgression, getHiddenNumber } from '../index.js';

export default (questionsCount, progressionLength) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 0; i < questionsCount; i += 1) {
    const startOfPr = getRandomInt(1, 100);
    const stepOfPr = getRandomInt(1, 10);
    const hiddenIndex = getRandomInt(0, progressionLength - 1);
    const progression = getProgression(progressionLength, startOfPr, stepOfPr, hiddenIndex);
    const hiddenNumber = getHiddenNumber(progressionLength, startOfPr, stepOfPr, hiddenIndex);

    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');

    if (hiddenNumber !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');

    if (i === questionsCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
