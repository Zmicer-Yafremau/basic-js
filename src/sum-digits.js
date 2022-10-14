const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = n+'';
  let init = 0;
  let i = 0;
  while (str.length > 1){
    str = str.split('')
          .reduce((cur, next)=>Number(cur)+Number(next),init) + '';
          i++;
          if (i>20) return 9;
  }
  return +str;
}

module.exports = {
  getSumOfDigits
};
