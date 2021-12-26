import getRandomInt from '../utils.js';
import {
  askName,
  greetings,
  askQuestion,
  getFeedBack,
  isAnswerCorrect,
  congratulations,
} from '../index.js';

export const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  greetings();

  const name = askName();

  const condition = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";
  console.log(condition);

  const questionCount = 3;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const num = getRandomInt();
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    const question = `${num}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;

    if (count === questionCount) {
      congratulations(name);
    }
  }
};
