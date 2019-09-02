const sum = (num1, num2) => {
  return num1 + num2;
};
const sub = (num1, num2) => {
  return num1 - num2;
};
const mult = (num1, num2) => {
  return num1 * num2;
};
const div = (num1, num2) => {
  if (num2 == 0) return 'não é possivel divisão por zero';
  return num1 / num2;
}

export {
  sum, sub, div, mult
}
