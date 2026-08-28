// TODO(hot100): 完成解法后删除本行。
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let currentNum = 0;
  let currentString = '';
  const numStack = [];
  const strStack = [];
  for (let i = 0; i < s.length; i++) {
    if (!Number.isNaN(Number(s[i]))) {
      currentNum = currentNum * 10 + Number(s[i])
    } else if (s[i] === '[') {
      numStack.push(currentNum)
      strStack.push(currentString)
      currentNum = 0
      currentString = ''
    } else if (s[i] === ']') {
      let count = numStack[numStack.length - 1]
      let preStr = strStack[strStack.length - 1]
      numStack.pop()
      strStack.pop()
      currentString = preStr + currentString.repeat(count)
    } else {
      currentString += s[i]
    }
  }
  return currentString
};
