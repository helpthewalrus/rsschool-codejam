const make = function make(...arg) {
  let a = arg;

  const inner = function inner(...args) {
    if (typeof args[0] !== 'function') {
      a = a.concat(args);
      return inner;
    }
    return a.reduce(args[0]);
  };
  return inner;
};

module.exports = make;
