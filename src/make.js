module.exports = function make(...arg) {
  return function f(...items) {
    if (typeof items[0] === 'function') {
      return arg.reduce(items[0]);
    }
    items.forEach(item => arg.push(item));
    return f;
  };
};
