const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor(){
    this.counter = 1;  
    this.res=1;
  };
    calculateDepth(arr) {
  
  if ( arr.filter( element => Array.isArray(element) ).length > 0 ){ 
    
    this.counter++;
    this.calculateDepth( arr.flat() ) ;
  
  }
  else {
      this.res = this.counter
      this.counter=1;
      
       };  
  return this.res;
  };
  };

module.exports = {
  DepthCalculator
};
