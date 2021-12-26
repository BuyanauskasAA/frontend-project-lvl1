import getRandomInt from '../utils.js';
import {
  showPreviewAndGetName,
  askQuestion,
  getFeedBack,
  isAnswerCorrect,
  congratulations,
} from '../index.js';

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

export default () => {
  const conditions = 'What number is missing in the progression?';
  const name = showPreviewAndGetName(conditions);

  const questionCount = 3;
  const progressionLength = 10;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const start = getRandomInt();
    const step = getRandomInt(1, 10);
    const hiddenIndex = getRandomInt(0, progressionLength - 1);
    const progression = getProgression(progressionLength, start, step, hiddenIndex);
    const correctAnswer = getHiddenNumber(progressionLength, start, step, hiddenIndex);
    const question = `${progression}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;
  }

  if (status && count === questionCount) {
    congratulations(name);
  }
};
