const sum = function sumOfOther(array) {
  if (array.length < 2 || array.filter(item => typeof item !== 'number').length) return 'Invalid array';
  const reduced = array.reduce((a, b) => a + b);
  return array.map(item => reduced - item);
};

module.exports = sum;
