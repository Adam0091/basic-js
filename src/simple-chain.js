const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrChain: [],
  getLength() {
    return arrChain.length;
  },
  addLink(value) {
    if(typeof(value) === 'undefined'){
      this.arrChain.push(' ');
    }else{
      this.arrChain.push(String(value));
    }
    return this;
  },
  removeLink(position) {
    if(typeof(position) === 'number' && position % 1 === 0)
      this.arrChain.splice(position - 1, 1);
    else{
      this.arrChain = [];
      throw new Error();
    }
    return this;
  },
  reverseChain() {
    this.arrChain.reverse();
    return this;
  },
  finishChain() {
    let resultStr = '';
    for(let i = 0; i <  this.arrChain.length; i++){
      resultStr += '( ' + this.arrChain[i] + ' )';
      if(i !== this.arrChain.length - 1){
        resultStr += '~~';
      }
    }
    this.arrChain = [];
    return resultStr;
  }
};

module.exports = chainMaker;
