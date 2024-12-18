const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  const chars = str.split('');
  let count = 1;
  let result = '';
  const lastIndex = chars.length - 1;
  const updateResult = (char) => {
    result += count > 1 ? count + char : char;
  }

  for (let i = 1; i <= lastIndex; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      updateResult(chars[i - 1])
      count = 1;
    }
  }
  updateResult(chars[lastIndex]);

  return result;
}

module.exports = {
  encodeLine
};
