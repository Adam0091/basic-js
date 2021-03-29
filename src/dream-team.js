const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!members || !Array.isArray(members)) return false
  let arrDreamTeam = new Array();
  for(let name of members){
    if (typeof(name) === 'string'){
      name = name.trim();
      arrDreamTeam.push(name[0].toUpperCase());
    }
  }
  arrDreamTeam.sort();
  let strDreamTeam = "";
  for(let char of arrDreamTeam){
    strDreamTeam += char;
  }

  return strDreamTeam;
};
