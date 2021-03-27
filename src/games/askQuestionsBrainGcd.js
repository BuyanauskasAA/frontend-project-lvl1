import readlineSync from 'readline-sync';
import { getRandomInt, getGcd } from '../index.js';

export default (questionsCount) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < questionsCount; i += 1) {
    const randomInt1 = getRandomInt(1, 100);
    const randomInt2 = getRandomInt(1, 100);
    const gcd = getGcd(randomInt1, randomInt2);

    console.log(`Question: ${randomInt1} ${randomInt2}`);
    const answer = readlineSync.question('Your answer: ');

    if (gcd !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${gcd}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');

    if (i === questionsCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
