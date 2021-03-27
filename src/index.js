export const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomOp = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  const operator = operators[index];
  return operator;
};

export const makeOps = (num1, num2, op) => {
  let result = 0;
  if (op === '+') {
    result = num1 + num2;
  }
  if (op === '-') {
    result = num1 - num2;
  }
  if (op === '*') {
    result = num1 * num2;
  }
  return result.toString();
};

export const getGcd = (num1, num2) => {
  let result = 0;
  for (let i = 1; i <= num1 || i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  return result.toString();
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
