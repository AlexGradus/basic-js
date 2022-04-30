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
 let c=1;
 const delta=(a) =>a.some(s=>Array.isArray(s)) 
 
class DepthCalculator {
  
  calculateDepth(a) {
     
    if(delta(a)){

      c++;
      a=a.flat();
      this.calculateDepth(a);
      
     
     
    
   } return c;
  } 
}

module.exports = {
  DepthCalculator
};
