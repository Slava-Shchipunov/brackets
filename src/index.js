module.exports = function check(str, bracketsConfig) {
  let stackArray = [];
  let errors = 0;
  for (let i = 0; i < str.length; i++) {
    bracketsConfig.forEach(element => {
      if (element[0] === element[1]) {
        if (str[i] === element[0]) {
          stackArray[stackArray.length - 1] === element[0] ? stackArray.pop() : stackArray.push(str[i]);
        }
        //console.log('tut' + i);
        //console.log(stackArray);
      } else if (str[i] === element[0]) {
          stackArray.push(str[i]);
          //console.log('zdes' + i);
          //console.log(stackArray);
        } else if (str[i] === element[1]) {
          stackArray[stackArray.length - 1] === element[0] ? stackArray.pop() : errors++;
          //console.log('tam' + i);
          /* console.log(errors); */
          //console.log(stackArray);
        } 
    });
  }
  if (errors !== 0) {
    return false;
  } else if (stackArray.length === 0) {
    return true;
  } else {
    return false;
  }
}
