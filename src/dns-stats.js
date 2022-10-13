const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let domainSet = new Set();
  let domainsArray = [];
  let setArray = [];
  let obj = {};
  domains = domains.map((el)=>el.split('.').reverse().join('.'));
  domains.forEach( (el) => {
  
   for (let i = 0; i<el.split('.').length; i++){
    console.log(el);
                   domainSet.add(el.split('.')
                                   .slice(0,i+1)
                                   .join('.'));
                  domainsArray.push(el.split('.')
                                      .slice(0,i+1)
                                      .join('.'));
      

     }
  })

 domainSet.forEach (el=>setArray.push(`.${el}`));
  setArray = setArray.forEach((el)=>{
                      obj[el]=1;
                     });

  for (let j in obj){
    obj[j] = domainsArray.filter(e=>e===j.slice(1)).length;
  }

    return obj;
}

module.exports = {
  getDNSStats
};
