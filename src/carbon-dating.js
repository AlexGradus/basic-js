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
function dateSample(a) {
  if(typeof a!=	"string"||Number(a)<0||!Number(a)||Number(a)>15 ){
    return false;
  }
  a=Number(a)
 const k=0.693/5730;
 let t= Math.log(15/a)/k;
 return Math.ceil(t);
}

module.exports = {
  dateSample
};
