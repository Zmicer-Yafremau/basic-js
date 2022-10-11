const { NotImplementedError } = require('../extensions/index.js');

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
  let nString = n + "";
 let max = '';
 let tempN = '';
 let nArray = nString.split('');
 let resArray = [];
 for (let i in nArray){
  let nArrayTemp = [...nArray];
  delete nArrayTemp[i];
  resArray.push(+nArrayTemp.join(''));
 } 
return Math.max(...resArray);
}

module.exports = {
  deleteDigit
};
