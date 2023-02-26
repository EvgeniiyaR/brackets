module.exports = function check(str, bracketsConfig) {
  let list = [];
  if (str.length % 2 != 0) {
    return false;
  }
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === '|' && bracketsConfig[j][0] === '|' && list[list.length - 1] === '|') {
        list.pop();
      } else if (str[i] === '7' && bracketsConfig[j][0] === '7' && list[list.length - 1] === '7') {
        list.pop();
      } else if (str[i] === '8' && bracketsConfig[j][0] === '8' && list[list.length - 1] === '8') {
        list.pop();
      } else if (str[i] === bracketsConfig[j][0]) {
        list.push(bracketsConfig[j][0]);
      } else if (str[i] === bracketsConfig[j][1] && bracketsConfig[j][0] === list[list.length - 1] ) {
        list.pop();
      }
    }
  }
  if (list.length != 0) {
    return false;
  }
  return true;
}