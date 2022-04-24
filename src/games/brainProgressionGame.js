import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getProgression = (progressionLength, progressionStart, progressionStep, hiddenIndex) => {
  const result = [];
  let current = progressionStart;

  for (let i = 0; i < progressionLength; i += 1) {
    current += progressionStep;
    if (i === hiddenIndex) {
      result.push('..');
    } else {
      result.push(current);
    }
  }
  return result.join(' ');
};

const getHiddenNumber = (progressionLength, progressionStart, progressionStep, hiddenIndex) => {
  const result = [];
  let current = progressionStart;

  for (let i = 0; i < progressionLength; i += 1) {
    current += progressionStep;
    result.push(current);
  }
  return result[hiddenIndex].toString();
};

const getConditions = () => {
  const start = getRandomInt();
  const step = getRandomInt(1, 10);
  const progressionLength = 10;
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const progression = getProgression(progressionLength, start, step, hiddenIndex);
  const correctAnswer = getHiddenNumber(progressionLength, start, step, hiddenIndex);
  const question = `${progression}`;
  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
