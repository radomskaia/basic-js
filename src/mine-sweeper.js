const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const trueIndexes = [];

  matrix.forEach((row, indexX) => {
    row.forEach((item, indexY) => {
      if (item) {
        trueIndexes.push([indexX, indexY]);
      }
    })
  })
  const result = matrix.map((row, indexX) => row.map((item) => 0))

  trueIndexes.forEach((coord) => {
    for (let i = coord[0] - 1; i <= coord[0] + 1; i++) {
      if (i < 0 || i > result.length - 1) {
        continue;
      }
      for (let j = coord[1] - 1; j <= coord[1] + 1; j++) {
        if (j < 0 || j > result[0].length - 1) {
          continue;
        }
        if (i === coord[0] && j === coord[1]) {
          continue
        }
        result[i][j]++;
      }
    }
  })
  return result;
}

module.exports = {
  minesweeper
};
