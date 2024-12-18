const { NotImplementedError } = require('../extensions/index.js');

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
  let zeroIndexes = [];
  let sum = 0;
  matrix.forEach((row) => {
    row.forEach((num, index) => {
      if (num === 0 && !zeroIndexes.includes(index)) {
        zeroIndexes.push(index);
      }
      if (!zeroIndexes.includes(index)) {
        sum += num;
      }
    })
  })
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
