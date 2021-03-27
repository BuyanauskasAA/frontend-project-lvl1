import readlineSync from 'readline-sync';
import { getRandomInt, getRandomOp, makeOps } from '../index.js';

export default (questionsCount) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 0; i < questionsCount; i += 1) {
    const randomInt1 = getRandomInt(1, 20);
    const randomInt2 = getRandomInt(1, 20);
    const randomOp = getRandomOp();
    const resultOfOps = makeOps(randomInt1, randomInt2, randomOp);

    console.log(`Question: ${randomInt1} ${randomOp} ${randomInt2}`);
    const answer = readlineSync.question('Your answer: ');

    if (resultOfOps !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${resultOfOps}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');

    if (i === questionsCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
