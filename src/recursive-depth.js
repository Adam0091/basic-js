const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let maxdepth = 0;
    let depth = 0;
    for(let i = 0; i < arr.length; i++){
      if(Array.isArray(arr[i])){
        depth = Math.max(this.calculateDepth(arr[i])) ;
        maxdepth = maxdepth < depth ? depth : maxdepth;
      }
    }
    return 1 + maxdepth;
  }
};