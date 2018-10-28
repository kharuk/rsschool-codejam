/* eslint-disable no-param-reassign */
module.exports = function recursion(tree) {
  const resultArray = [];

  function treeTraversal(node, arr, index) {
    if (!arr[index]) {
      arr[index] = [];
    }
    arr[index].push(node.value);

    if (node.left) {
      treeTraversal(node.left, arr, index + 1);
    }
    if (node.right) {
      treeTraversal(node.right, arr, index + 1);
    }
  }

  treeTraversal(tree, resultArray, 0);
  return resultArray;
};
