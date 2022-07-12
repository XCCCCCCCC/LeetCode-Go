const longestValidParentheses_func1 = (s) => {
  let temp = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '(') {
      continue
    }
    let sub = 0
    let j = i
    let k = i + 1
    while (s[j] === '(' && s[k] === ')' && j < s.length) {
      sub += 1
      j += 2
      k = j + 1
    }
    if (sub > temp) {
      temp = sub
    }
  }
  return temp * 2
}
const longestValidParentheses_func2 = (s) => {
  let result = 0
  for (let i = 0; i < s.length; i++) {
    let j = i
    const temp = [-1]
    let len = 0
    while (j < s.length) {
      if (s[j] === ')') {
        if (temp.pop()) {
          j++
          len = j - temp[temp.length - 1]
          result = Math.max(len, result)
        } else {
          break
        }
      } else {
        temp.push(j)
        j++
      }
    }
  }
  return result
}
let a = longestValidParentheses_func2('()()')
console.log(a)
