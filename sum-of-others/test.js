const assert = require('assert');

Object.freeze(assert);
const sumOfOther = require('./sumOfOther');

describe('Sum', () => {
  it('1', () => {
    const sum = sumOfOther([2, 3]);
    assert.deepEqual(sum, [3, 2]);
  });
  it('2', () => {
    const sum = sumOfOther([1]);
    assert.deepEqual(sum, 'Invalid array');
  });
  it('3', () => {
    const sum = sumOfOther([]);
    assert.deepEqual(sum, 'Invalid array');
  });
  it('4', () => {
    const sum = sumOfOther([1, 2, 'a']);
    assert.deepEqual(sum, 'Invalid array');
  });
  it('5', () => {
    const sum = sumOfOther([-10, -20, -30, -40]);
    assert.deepEqual(sum, [-90, -80, -70, -60]);
  });
  it('6', () => {
    const sum = sumOfOther([-100, 20, -10, 20]);
    assert.deepEqual(sum, [30, -90, -60, -90]);
  });
  it('7', () => {
    const sum = sumOfOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    assert.deepEqual(sum, [209, 208, 207, 206, 205, 204, 203, 202,
      201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190]);
  });
});
