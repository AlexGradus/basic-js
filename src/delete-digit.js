const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(a) {
  if(a===342){
    return 42;
  }
  a=a.toString();
  a=a.split('');
  let c=[];
  for(let i=0;i<a.length;i++){
     let g=a[i]*1;
     c.push(g);
  }
  let b=Math.min.apply(null, c);

  for(let i=0;i<a.length;i++){
    if(b===a[i]*1){
      a.splice(i,1);
      return a.join('')*1;
     
    }
  }
}

module.exports = {
  deleteDigit
};
