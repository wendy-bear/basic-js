const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let matRaw = matrix[0].length;
  let resultArr = [];

  matrix.forEach((el) => el.forEach((el) => resultArr.push(el)));

  return resultArr.reduce(
    (acc, el, i) =>
      resultArr[i - matRaw] == undefined || resultArr[i - matRaw] !== 0
        ? acc + el
        : acc,
    0
  );
}

module.exports = {
  getMatrixElementsSum,
};
