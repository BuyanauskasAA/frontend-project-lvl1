import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getConditions = () => {
  const question = getRandomInt();
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
