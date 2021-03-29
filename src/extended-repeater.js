const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options) {
  if(typeof(options.repeatTimes) !== 'number' || options.repeatTimes % 1 !== 0) options.repeatTimes = 1;
  if(typeof(options.additionRepeatTimes) !== 'number' || options.additionRepeatTimes % 1 !== 0) options.additionRepeatTimes = 1;
  if(!options.separator) options.separator = '+';
  if(!options.additionSeparator) options.additionSeparator  = '|';

  let resultStr = '';
  str = String(str);
  if(!!options.addition){
    options.addition = String(options.addition);
  }

  for(let i = 0; i < options.repeatTimes; i++){
    resultStr += str;
    for(let j = 0 ; j < options.additionRepeatTimes; j++){
      if(typeof(options.addition) !== 'undefined') resultStr += options.addition;
      if(j !== options.additionRepeatTimes - 1){
        resultStr += options.additionSeparator;
      }
    }
    if(i !== options.repeatTimes - 1){
      resultStr += options.separator;
    }
  }

  return resultStr
};
  