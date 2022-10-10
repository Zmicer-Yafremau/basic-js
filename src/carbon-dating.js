const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(GIVEN_ACTIVITY) {
  const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
   
    if ( isNaN( parseInt(GIVEN_ACTIVITY,10) ) || parseInt(GIVEN_ACTIVITY,10) <= 0 || !(typeof GIVEN_ACTIVITY === 'string') ){return false}
    else {
        let k = Math.LN2/HALF_LIFE_PERIOD;
        let t =Math.ceil(Math.log(MODERN_ACTIVITY/GIVEN_ACTIVITY)/k);
        return t > 0 ? t : false;
    }
}

module.exports = {
  dateSample
};
