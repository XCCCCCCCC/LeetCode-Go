const isValid_func1 = (s) => {
  const dic = new Map()
  const temp = []
  dic.set(')', '(')
  dic.set(']', '[')
  dic.set('}', '{')
  for (let i = 0; i < s.length; i++) {
    if (temp[temp.length - 1] === dic.get(s[i]) && temp[temp.length - 1] !== undefined) {
      temp.pop()
    } else {
      temp.push(s[i])
    }
  }
  return temp.length === 0
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid_func2 = function (s) {
  const dic = new Map()
  dic.set('(', ')')
  dic.set('[', ']')
  dic.set('{', '}')
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (!stack.length || s[i] !== dic.get(stack[stack.length - 1])) {
      stack.push(s[i])
    } else {
      stack.pop()
    }
  }
  return stack.length === 0
};