const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  b:[],
  getLength() {
   return this.b.length;
  },
  addLink(w) {
   this.b.push(`( ${w} )`);
    return this;
  },
  removeLink(rm) {
   if(!Number.isInteger(rm)|| typeof rm !='number'){
    this.b=[];
    throw new Error(`You can't remove incorrect link!`);
   }
   if(rm>this.b.length||rm<1){
     this.b=[];
    throw new Error(`You can't remove incorrect link!`);
   }
    this.b.splice(rm-1,1);
    return this
  },
  reverseChain() {
   this.b.reverse();
   return this
  },
  finishChain() {
    let q=this.b.join('~~');
    this.b=[];
    return q;
  }
};

module.exports = {
  chainMaker
};
