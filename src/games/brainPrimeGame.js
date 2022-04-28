import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = "Answer 'yes' if given number is prime. Otherwise answer 'no'.";

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

const getConditions = () => {
  const num = getRandomInt();
  const correctAnswer = isPrime(num) ? 'yes' : 'no';
  const question = num.toString();
  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
