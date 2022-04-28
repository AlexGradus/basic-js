const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(a) {
  if(!Array.isArray(a)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  if(a.length==0){
    return a;
     }

     let r=[];
     let g=[];
     g=g.concat(a);
    
     for(let i=0;i<g.length;i++){
        if(g[i]==='--discard-next'&&i+1<g.length){
           g.splice(i,2,'','');
        }
        if(g[i]==='--discard-next'&&i+1===g.length){
          g.splice(i,1,'');
       }
        if(g[i]==='--discard-prev'&&i>0){
          g.splice(i-1,2,'','');
       }
       if(g[i]==='--discard-prev'&&i===0){
        g.splice(i,1,'');
     }
       if(g[i]==='--double-next'&&i+1<g.length){
        g.splice(i,1,'',g[i+1]);
     }
     if(g[i]==='--double-next'&&i+1===g.length){
      g.splice(i,1,'');
   }
     if(g[i]==='--double-prev'&&i>0){
      g.splice(i,1,g[i-1],'');
   }
   if(g[i]==='--double-prev'&&i===0){
    g.splice(i,1,'');
 }

     }
     for(let i=0;i<g.length;i++){
       if(g[i]!=''){
         r.push(g[i]);
       }
     }
     return r;

}

module.exports = {
  transform
};
