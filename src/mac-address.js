const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const mac = n.split('-');
  if (mac.length !== 6) {
    return false;
  }
  for (let gigits of mac) {
    if (gigits.length !== 2) {
      return false;
    }

    if (!((gigits[0] >= '0' && gigits[0] <= '9') || (gigits[0] >= 'A' && gigits[0] <= 'F'))) {
      return false;
    }

    if (!((gigits[1] >= '0' && gigits[1] <= '9') || (gigits[1] >= 'A' && gigits[1] <= 'F'))) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isMAC48Address
};
