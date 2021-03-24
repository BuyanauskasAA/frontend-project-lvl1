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
