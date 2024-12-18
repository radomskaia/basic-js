const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let indexes = [];
    arr.forEach((item, index) => {
        if (item === -1) {
            indexes.push(index);
        }
    })
    const sortedArr = arr.sort((a, b) => a - b);
    for (let index = 0; index < sortedArr.length; index++) {
        if (indexes.length === 0) {
            return sortedArr;
        }
        if (sortedArr[index] === -1 && index === indexes[0]) {
            indexes.shift()
        } else if (sortedArr[index] === -1 && index !== indexes[0]) {
            sortedArr.splice(index, 1);
            sortedArr.splice(indexes[0] + indexes.length - 1, 0, -1);
            indexes.shift()
            index--;
        }
    };
    return sortedArr;
}

module.exports = {
    sortByHeight
};
