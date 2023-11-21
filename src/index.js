import readlineSync from 'readline-sync';

export default (rulesOfTheGame, getConditions) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rulesOfTheGame);

  const questionCount = 3;
  let count = 0;

  while (count < questionCount) {
    const [question, correctAnswer] = getConditions();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
      break;
    }

    count += 1;
  }

  if (count === questionCount) {
    console.log(`Congratulations, ${name}!`);
  }
};
