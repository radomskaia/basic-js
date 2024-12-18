const {NotImplementedError} = require('../extensions/index.js');

function deleteControl (index, array) {
  array.splice(index, 1);
  deletedIndex = null;
}

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * --discard-next excludes the next element of the array from the transformed array.
 *
 * --discard-prev excludes the previous element of the array from the transformed array.
 *
 * --double-next duplicates the next element of the array in the transformed array.
 *
 * --double-prev duplicates the previous element of the array in the transformed array.
 *
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  const transformedArray = [...arr];
  let deletedIndex = null;
  for (let index = 0; index < transformedArray.length; index++) {
    const array = transformedArray;
    const item = transformedArray[index]
    if (item === '--double-next') {
      if (index + 1 > array.length - 1 || index + 1 === deletedIndex) {
        deleteControl(index, array)
      } else {
        array.splice(index, 1);
        array.splice(index, 0, array[index]);
      }
    }
    if (item === '--double-prev') {
      if (index - 1 < 0 || index - 1 === deletedIndex) {
        deleteControl(index, array)
      } else {
        array.splice(index, 1);
        array.splice(index, 0, array[index - 1]);
      }
    }
    if (item === '--discard-prev') {
      if (index - 1 < 0 || index - 1 === deletedIndex) {
        deleteControl(index, array)
      } else {
        array.splice(index - 1, 2);
        deletedIndex = index - 1;
      }
      index --
    }
    if (item === '--discard-next') {
      if (index + 1 > array.length - 1 || index + 1 === deletedIndex) {
        deleteControl(index, array)
      } else {
        array.splice(index, 2);
        deletedIndex = index - 1;
      }
      index --

    }
  }
  return transformedArray;
}

module.exports = {
  transform
};
