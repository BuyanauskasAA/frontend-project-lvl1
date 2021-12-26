import getRandomInt from '../utils.js';
import {
  askName,
  askQuestion,
  greetings,
  congratulations,
  isAnswerCorrect,
  getFeedBack,
} from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  const operator = operators[index];
  return operator;
};

const makeOperation = (num1, num2, operator) => {
  let result = 0;
  if (operator === '+') {
    result = num1 + num2;
  }
  if (operator === '-') {
    result = num1 - num2;
  }
  if (operator === '*') {
    result = num1 * num2;
  }
  return result.toString();
};

export default () => {
  greetings();

  const name = askName();

  const conditions = 'What is the result of the expression?';
  console.log(conditions);

  const questionCount = 3;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const num1 = getRandomInt();
    const num2 = getRandomInt();
    const operator = getRandomOperator();
    const correctAnswer = makeOperation(num1, num2, operator);
    const question = `${num1} ${operator} ${num2}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;

    if (count === questionCount) {
      congratulations(name);
    }
  }
};
