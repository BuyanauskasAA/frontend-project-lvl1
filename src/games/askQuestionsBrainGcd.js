import readlineSync from 'readline-sync';
import { getRandomInt, getGcp } from '../index.js';

export default (questionsCount) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < questionsCount; i += 1) {
    const randomInt1 = getRandomInt(1, 100);
    const randomInt2 = getRandomInt(1, 100);

    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const answer = readlineSync.question('Your answer: ');

    if (getGcp(randomInt1, randomInt2) !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getGcp(randomInt1, randomInt2)}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');

    if (i === questionsCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
