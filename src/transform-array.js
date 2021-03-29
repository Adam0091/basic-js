const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if( !Array.isArray(arr) ) throw new Error('не массив');
  let resultArr = [];
  if(arr.length === 0) return resultArr;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === '--discard-next'){
      i++;
    }
    else if(arr[i] === '--discard-prev'){
      if( typeof(resultArr[resultArr.length - 1]) !== 'undefined' ){
        if( arr[i-2] !== '--discard-next')
          resultArr.splice(resultArr.length - 1, 1);
      }
    }
    else if(arr[i] === '--double-next'){
      if( typeof(arr[i+1]) !== 'undefined' ){
        resultArr.push(arr[i+1]);
      }
    }
    else if(arr[i] === '--double-prev'){
      if( typeof(arr[i-1]) !== 'undefined'){
        if( arr[i-2] !== '--discard-next' ){
          resultArr.push(arr[i-1]);
        }
      }
    }
    else{
      resultArr.push(arr[i]);
    }
  }
  return resultArr;
};
