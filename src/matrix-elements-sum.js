const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let arr = [];
  outer: for (let j = 0; j<matrix[0].length; j++){
  for (let i = 0; i<matrix.length; i++){
     if (matrix[i][j]) arr.push(matrix[i][j]);
     else continue outer;
  }
}
let initial = 0;
return arr[0] ? arr.reduce((cur, next)=>cur+next, initial): 0;
}
module.exports = {
  getMatrixElementsSum
};
