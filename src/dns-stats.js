const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  domains.forEach(domain => {
    const splitedDomain = domain.split('.');
    let key = '';
    while (splitedDomain.length > 0) {
      key += '.' + splitedDomain.pop().trim();
      if (result[key]) {
        result[key]++
      } else {
        result[key] = 1;
      }
   }
  })
  return result;
}

module.exports = {
  getDNSStats
};
