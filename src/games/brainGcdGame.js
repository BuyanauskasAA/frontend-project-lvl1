import getRandomInt from '../utils.js';
import {
  showPreviewAndGetName,
  askQuestion,
  getFeedBack,
  isAnswerCorrect,
  congratulations,
} from '../index.js';

const getGcd = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result.toString();
};

export default () => {
  const conditions = 'Find the greatest common divisor of given numbers.';
  const name = showPreviewAndGetName(conditions);

  const questionCount = 3;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const correctAnswer = getGcd(num1, num2);
    const question = `${num1} ${num2}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;
  }

  if (status && count === questionCount) {
    congratulations(name);
  }
};
