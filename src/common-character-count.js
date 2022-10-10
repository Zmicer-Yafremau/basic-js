const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
 let counter = 0;
 let newArr=[];
 let index;
 let long =s1;
 let short =s2;

 if (s1.length<s2.length){
  long = s2;
  short =s1 
 };

newArr=long.split('');
for (let i in short){
  if ( newArr.includes(short[i]) ){

counter++;
index = newArr.findIndex(element => element === short[i] );
delete newArr[index];

  }

}


 return counter;
}

module.exports = {
  getCommonCharacterCount
};
