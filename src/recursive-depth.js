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
class DepthCalculator {
  
  calculateDepth(a) {
     
    for(let b of a){
      if(Array.isArray(b)){
        a=a.flat();
        c++
        this.calculateDepth(a);
      }
    }
    return c;
  } 
}

module.exports = {
  DepthCalculator
};
