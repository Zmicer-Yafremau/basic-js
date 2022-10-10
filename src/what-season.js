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

 function getSeason(date){

  try {
    isNaN(date) 
  }
     catch(e){
       throw new Error("Invalid date!")
     }

if ( date instanceof Date 
     && typeof date === 'object'
     && ! ( isNaN(date) ) 
     && date != null 
     && Object.prototype.toString.call(date) === '[object Date]'
     && !( date instanceof Function ) ) {
 let month = date.getMonth()+1;
 if (month == null) throw new Error("Invalid date!");
 return month < 3  ? 'winter' : month < 6 ? 'spring' : month < 9 ? 'summer' : month === 12 ? 'winter' : 'autumn|fall'; 
}
 else if (date === undefined ) return 'Unable to determine the time of year!';
 else throw new Error("Invalid date!");

 };
module.exports = {
  getSeason
};
