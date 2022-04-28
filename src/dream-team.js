const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {
  if(!Array.isArray(a)){
    return false;
  }
 
  let c=[];
   for(let b of a){
     if(typeof b==="string"){
       b=b.replace(/\s+/g, '')
        c.push(b[0].toUpperCase());

     }
    }
   return c.sort().join('');
}

module.exports = {
  createDreamTeam
};
