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
 function repeater(str,b) {
   if(str===null){
     return 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
   }
   str=str+'';
  let Add=''
  let Par=b;
  let Array=[];
  let ArrayAdd=[];
  if(Par.hasOwnProperty('repeatTimes')){
    let Amount=b.repeatTimes;
    for(let i=0;i<Amount;i++){
      Array.push(str.toString());
    }
  } else  Array.push(str.toString())
  
  
  if(Par.hasOwnProperty('addition')){
    Add=Par.addition+'';
    if(Par.hasOwnProperty('additionRepeatTimes')){
      let Amount=Par.additionRepeatTimes;
      for(let i=0;i<Amount;i++){
        ArrayAdd.push(Par.addition);
      } 
       if(Par.hasOwnProperty('additionSeparator')){
          let Sep=Par.additionSeparator;
          ArrayAdd=ArrayAdd.join(`${Sep}`)
       } else ArrayAdd= ArrayAdd.join('|');

  } else  ArrayAdd.push(Add);
    }
    if(Par.hasOwnProperty('separator')){
      if(Par.hasOwnProperty('addition')){
        let MainSep=Par.separator;
        ArrayAdd1=ArrayAdd+MainSep;
        return Array= Array.join(`${ArrayAdd1}`)+`${ArrayAdd}`
      }  return Array= Array.join(`${Par.separator}`)
       

    } else if(Par.hasOwnProperty('addition')){
      ArrayAdd1=ArrayAdd+'+';
      return Array= Array.join(`${ArrayAdd1}`)+`${ArrayAdd}`
    } else return Array=Array.join('+');
 
  }  

module.exports = {
  repeater
};
