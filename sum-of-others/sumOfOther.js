const sumOfOther = function sumOfOther(array) {
  const reduced = array.reduce((a, b) => a + b);
  return array.map(item => reduced - item);
};

sumOfOther([1, 2, 3, 4]);
