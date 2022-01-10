import getRandomInt from '../utils.js';
import {
  showPreviewAndGetName,
  askQuestion,
  getFeedBack,
  isAnswerCorrect,
  congratulations,
} from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomInt(1, operators.length - 1);
  const operator = operators[index];
  return operator;
};

const calculate = (num1, num2, operator) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    default:
      result = NaN;
  }
  return result.toString();
};

export default () => {
  const conditions = 'What is the result of the expression?';
  const name = showPreviewAndGetName(conditions);

  const questionCount = 3;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = getRandomOperator();
    const correctAnswer = calculate(num1, num2, operator);
    const question = `${num1} ${operator} ${num2}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;
  }

  if (status && count === questionCount) {
    congratulations(name);
  }
};
