let str ='I love programming';
let upperChar = [];

function convertCharToUpper(str){
  let splitChar = str.split(' ');
   
  splitChar.forEach(element => {
      upperChar.push( element.charAt(0).toUpperCase()+element.substr(1));
  });
  return upperChar.join(' ');
}

console.log(convertCharToUpper(str));