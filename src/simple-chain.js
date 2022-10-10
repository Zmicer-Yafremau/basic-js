const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain : '',
  getLength() {
  return this.chain
      .split('~~')
      .length;
     
  },
  addLink(value) {
    if (value===undefined) this.chain += `( )~~`;
    else this.chain += `( `+value+` )` + '~~';
      return this
  },
  removeLink(position) {
 if (typeof position === 'number'
      && position >= 1
      && position-Math.floor(position) === 0
      &&  this.chain.split('~~')[position-1] != null
      && position <= this.chain.split('~~').length-1
     ) {
    this.chain =this.chain
                    .split('~~')
                    .filter( (el, index) => index != position-1 && el != '' )
                    .join(`~~`) + '~~';
     
  return this;}
    else { 
      this.chain='';
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    if (this.chain.split('~~')!='' && this.chain!='' ){
  this.chain =this.chain
                  .split('~~')
                  .reverse()
                  .filter( index => index != '' )
                  .join(`~~`) + '~~';}
  return this;
  },
  finishChain() {
    let res = this.chain.slice(0,-2);  
    this.chain='';
    return res;
  }
};

module.exports = {
  chainMaker
};
