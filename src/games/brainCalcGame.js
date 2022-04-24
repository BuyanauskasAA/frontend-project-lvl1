import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = 'What is the result of the expression?';

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

const getConditions = () => {
  const num1 = getRandomInt();
  const num2 = getRandomInt();
  const operator = getRandomOperator();
  const correctAnswer = calculate(num1, num2, operator);
  const question = `${num1} ${operator} ${num2}`;
  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
