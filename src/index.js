import readlineSync from 'readline-sync';

export const askName = () => {
  const greetings = 'Welcome to the Brain Games!';
  console.log(greetings);
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
