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
let a = isValid_func1('()]')
console.log(a)
