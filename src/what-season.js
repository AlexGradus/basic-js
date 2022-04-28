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
function getSeason(date) {
  
  if(!date){
     return 'Unable to determine the time of year!'
  }
   if(date instanceof Date){
    if(!(Object.prototype.toString.call(date) === '[object Date]')) {throw new Error("Invalid date!") } 
    if(date== null){
     
      throw new Error("Invalid date!") 
    }
  
    
    
    let b=date.getMonth();
    if(b>=0&&b<2||b==11){
      return 'winter';
    }
    if(b>1&&b<5){
      return 'spring';
    }
    if(b>4&&b<8){
      return 'summer';
    }
    if(b>7&&b<11){
      return 'autumn';
    }
  }
  throw new Error("Invalid date!") 
}

module.exports = {
  getSeason
};


