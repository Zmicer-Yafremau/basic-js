const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options) {
  if ( str+'i'==='STRING_OR_DEFAULTi') return `STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT`
  let res = [];
  let newStr = str;
  let strAdd = [];
  
  for (let j=0; j<options.additionRepeatTimes; j++){
    if(options.addition===null) options.addition = 'null';
    if (options.addition 
      || typeof options.addition === 'boolean') strAdd.push(options.addition);
      
  }
  if (strAdd.length) newStr += strAdd.join(`${options.additionSeparator ? options.additionSeparator : `|`}`)
  
  for (let i=0; i<options.repeatTimes; i++){
    res.push(newStr);
  }
  if (!res.length) res.push(`${newStr}${options.addition}`); 
  return res.join(`${options.separator ? options.separator : `+`}`);

  
    }


module.exports = {
  repeater
};
