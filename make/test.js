const assert = require('assert');

Object.freeze(assert);
const make = require('./make');

describe('Result', () => {
  it('1', () => {
    const result = make(0)((a, b) => a + b);
    assert.equal(result, 0);
  });
  it('2', () => {
    const result = make(15)((a, b) => a + b);
    assert.equal(result, 15);
  });
  it('3', () => {
    const result = make(15, 12)((a, b) => a + b);
    assert.equal(result, 27);
  });
  it('4', () => {
    const result = make(15, 12)(13)((a, b) => a + b);
    assert.equal(result, 40);
  });
  it('5', () => {
    const result = make(15, 12)(13, -10)((a, b) => a + b);
    assert.equal(result, 30);
  });
  it('6', () => {
    const result = make(2, 3)(4, 5)((a, b) => a * b);
    assert.equal(result, 120);
  });
  it('7', () => {
    const result = make(-1, -2)(-3, -4)((a, b) => a + b);
    assert.equal(result, -10);
  });
  it('8', () => {
    const result = make(-1, -2)(-3, -4)((a, b) => a * b);
    assert.equal(result, 24);
  });
  it('9', () => {
    const result = make(-24, 2)(-3, -2)((a, b) => a / b);
    assert.equal(result, -2);
  });
  it('10', () => {
    const result = make(-24, 2)(-3, -2)((a, b) => a - b);
    assert.equal(result, -21);
  });
  it('11', () => {
    const result = make(1, 2)(3, 4)((a, b) => a ** b);
    assert.equal(result, 1);
  });
  it('12', () => {
    const result = make(5, 2)(-1)((a, b) => a ** b);
    assert.equal(result, 0.04);
  });
  it('13', () => {
    const result = make(5, 2)(-1, 0)((a, b) => a ** b);
    assert.equal(result, 1);
  });
  it('14', () => {
    const result = make(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)((a, b) => 2 * a + b);
    assert.equal(result, 2036);
  });
  it('15', () => {
    const result = make(1, 2, 3, 4, 5)(6, 7, 8, 9, 10)((a, b) => 2 * a + b);
    assert.equal(result, 2036);
  });
});
