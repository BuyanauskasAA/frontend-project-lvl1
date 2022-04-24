import readlineSync from 'readline-sync';

const showGreetings = () => {
  console.log('Welcome to the Brain Games!');
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const getAnswer = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const isAnswerCorrect = (answer, correctAnswer) => (answer === correctAnswer);

const getFeedBack = (answer, correctAnswer, name) => {
  if (isAnswerCorrect(answer, correctAnswer)) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  }
};

const showCongratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export default (rulesOfTheGame, getConditions, questionCount = 3) => {
  showGreetings();
  const name = getName();
  console.log(rulesOfTheGame);

  let status = true;
  let count = 0;

  while (status && count < questionCount) {
    const [question, correctAnswer] = getConditions();

    const answer = getAnswer(question);

    getFeedBack(answer, correctAnswer, name);

    status = isAnswerCorrect(answer, correctAnswer);
    count += 1;
  }

  if (status && count === questionCount) {
    showCongratulations(name);
  }
};
