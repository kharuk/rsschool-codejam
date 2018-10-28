module.exports = function sumOfOther(array) {
  const sumOfAllElement = array.reduce(((sum, item) => sum + item), 0);
  return array.map(item => sumOfAllElement - item);
};
