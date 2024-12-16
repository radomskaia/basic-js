const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const digits = [];
    let num = n;
    while (num) {
        digits.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    const numbers = [];
    digits.forEach((_, i) => {
        const numFromDigits = [...digits];
        numFromDigits.splice(i,1)
        numbers.push(+numFromDigits.join(''));
    })
    return Math.max(...numbers);
}

module.exports = {
    deleteDigit
};
