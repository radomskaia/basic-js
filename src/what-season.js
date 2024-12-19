const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.getTime()
  } catch (e) {
    throw new Error('Invalid date!');
  }

    const seasons = {
    1: 'winter',
    2: 'winter',
    3: 'spring',
    4: 'spring',
    5: 'spring',
    6: 'summer',
    7: 'summer',
    8: 'summer',
    9: 'autumn (fall)',
    10: 'autumn (fall)',
    11: 'autumn (fall)',
    12: 'winter'
  }

  return seasons[date.getMonth() + 1];
}

module.exports = {
  getSeason
};
