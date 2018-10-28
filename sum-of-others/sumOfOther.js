const sumOfOther = function sumOfOther(array) {
  const reduced = array.reduce((a, b) => a + b);
  return array.map(item => reduced - item);
};
