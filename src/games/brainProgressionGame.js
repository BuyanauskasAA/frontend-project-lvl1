import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getProgression = (progressionLength, progressionStart, progressionStep, hiddenIndex) => {
  const result = [];
  let current = progressionStart;

  for (let i = 0; i < progressionLength; i += 1) {
    current += progressionStep;
    result.push(current);
  }

  const hiddenNumber = result[hiddenIndex].toString();
  result[hiddenIndex] = '..';

  return [hiddenNumber, result.join(' ')];
};

const getConditions = () => {
  const start = getRandomInt();
  const step = getRandomInt(1, 10);
  const progressionLength = 10;
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const [correctAnswer, question] = getProgression(progressionLength, start, step, hiddenIndex);
  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
