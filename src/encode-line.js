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

  let newArr=[];
  let newStr=[];
newArr = str.split('');

for (let i=0; i<newArr.length;i++){
if (newArr[i]!=newArr[i+1]){
  if (newArr.filter(index => index === newArr[i])
  .length > 1
  && newArr[i-1] === newArr[i] ){
newStr.push(newArr.filter(index => index === newArr[i])
      .length);
    }
newStr.push(newArr[i])
}


}
return newStr.join('');
}

module.exports = {
  encodeLine
};
