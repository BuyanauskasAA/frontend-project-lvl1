import readlineSync from 'readline-sync';
import { isPrime, getRandomInt } from '../index.js';

export default (questionsCount) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log("Answer 'yes' if given number is prime. Otherwise answer 'no'.");

  for (let i = 0; i < questionsCount; i += 1) {
    const randomInt = getRandomInt(1, 100);
    const primeInt = isPrime(randomInt);

    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');

    if (primeInt !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${primeInt}'.\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');

    if (i === questionsCount - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
