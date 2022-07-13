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
  let temp = 0
  let stack = [-1]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length) {
        temp = Math.max(temp, i - stack[stack.length - 1])
      } else {
        stack.push(i)
      }
    }
  }
  return temp
}
let a = longestValidParentheses_func2('()()')
console.log(a)
