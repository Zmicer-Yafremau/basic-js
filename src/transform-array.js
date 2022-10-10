const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
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
 if ( !Array.isArray(arr) )  throw Error(`'arr' parameter must be an instance of the Array!`) ;
 let newArr = [];


 outer: for (let i=0; i<arr.length; i++){
if (typeof arr[i] === 'string'){
  switch (arr[i]){

    case '--discard-next' : 
    if ( arr[i+1] ) i++;
    continue outer;
    case '--discard-prev' : 
    if ( arr[i-1]!=null && arr[i-2]!='--discard-next' )  newArr.splice( i-1 , 1);
    continue outer;
    case '--double-next' : 
    if ( arr[i+1] ) newArr.push(arr[i+1]);
    continue outer;
    case '--double-prev' : 
    if ( arr[i-1]!=null && arr[i-2]!='--discard-next'  )  newArr.push(arr[i-1]);
    continue outer;

  }
}
newArr.push(arr[i]);
 }
 return newArr;


}

module.exports = {
  transform
};
