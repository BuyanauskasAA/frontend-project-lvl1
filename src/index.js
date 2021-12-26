import readlineSync from 'readline-sync';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
};

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const isAnswerCorrect = (answer, correctAnswer) => (answer === correctAnswer);

export const getFeedBack = (answer, correctAnswer, name) => {
  if (!isAnswerCorrect(answer, correctAnswer)) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
  } else {
    console.log('Correct!');
  }
};

export const congratulations = (name) => {
  console.log(`Congratulations, ${name}!`);
};

export const getProgression = (prLength, startOfPr, stepOfPr, hiddenIndex) => {
  const result = [];
  let current = startOfPr;

  for (let i = 0; i < prLength; i += 1) {
    current += stepOfPr;
    if (i === hiddenIndex) {
      result.push('..');
    } else {
      result.push(current);
    }
  }
  return result.join(' ');
};

export const getHiddenNumber = (prLength, startOfPr, stepOfPr, hiddenIndex) => {
  const result = [];
  let current = startOfPr;

  for (let i = 0; i < prLength; i += 1) {
    current += stepOfPr;
    result.push(current);
  }
  return result[hiddenIndex].toString();
};
