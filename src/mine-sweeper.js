const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
 function minesweeper( matrix ) {
  let newMatrix = [];
    matrix.forEach((el)=>newMatrix.push(el.slice(0)));
 for (let i=0; i<matrix.length; i++){

  for (let j=0; j<matrix[i].length; j++){
        let k = 1;
      console.log('i=',i);
      console.log('j=',j);
      console.log('mat=',matrix[i][j]);
console.log('right=',matrix[i][j+1]);
      console.log('left=',matrix[i][j-1]);

       newMatrix[i][j] = 0;
      
    if(matrix[i][j-1] === true) newMatrix[i][j] = k++;
    if(matrix[i][j+1] === true) newMatrix[i][j] = k++;
    if(matrix[i-1] ){
      console.log('up=',matrix[i-1][j]);  
      if(matrix[i-1][j] === true) newMatrix[i][j] = k++;
        if(matrix[i-1][j-1] === true) newMatrix[i][j] = k++;
        if(matrix[i-1][j+1] === true) newMatrix[i][j] = k++;
    }
    if(matrix[i+1]){
        console.log('down=',matrix[i+1][j]);
      if(matrix[i+1][j] === true) newMatrix[i][j] = k++;
        if(matrix[i+1][j-1] === true) newMatrix[i][j] = k++;
        if(matrix[i+1][j+1] === true) newMatrix[i][j] = k++;
    }
  }
 }
 return newMatrix;
}

module.exports = {
  minesweeper
};
