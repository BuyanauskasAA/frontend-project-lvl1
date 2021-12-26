import getRandomInt from '../utils.js';
import {
  askName,
  greetings,
  askQuestion,
  getFeedBack,
  isAnswerCorrect,
  congratulations,
} from '../index.js';

const isEven = (num) => (num % 2 === 0);

export default () => {
  greetings();

  const name = askName();

  const condition = "Answer 'yes' if the number is even, otherwise answer 'no'.";
  console.log(condition);

  const questionCount = 3;
  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const num = getRandomInt();
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    const question = `${num}`;

    const answer = askQuestion(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;

    if (count === questionCount) {
      congratulations(name);
    }
  }
};
