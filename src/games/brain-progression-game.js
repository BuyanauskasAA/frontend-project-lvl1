import getRandomInt from '../utils.js';
import askQuestions from '../index.js';

const rulesOfTheGame = 'What number is missing in the progression?';

const getProgression = (progressionLength, progressionStart, progressionStep) => {
  const result = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const current = progressionStart + i * progressionStep;
    result.push(current);
  }

  return result;
};

const getConditions = () => {
  const progressionStart = getRandomInt();
  const progressionStep = getRandomInt(1, 10);
  const progressionLength = 10;
  const hiddenIndex = getRandomInt(0, progressionLength - 1);
  const progression = getProgression(progressionLength, progressionStart, progressionStep);
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

export default () => {
  askQuestions(rulesOfTheGame, getConditions);
};
