const myAtoi_func1 = (s) => {
  let temp = parseInt(s)
  if (isNaN(temp)) {
    return 0
  }
  if (temp < Math.pow(-2, 31)) {
    return Math.pow(-2, 31)
  }
  if (temp > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1
  }
  return temp
}
const myAtoi_func2 = (s) => {
  let temp = s.trim()
  let result = 0
  let isMinus = 1
  if (/^-/.test(temp)) {
    isMinus = -1
  }
  for (let i = 0; i < temp.length; i++) {
    if (i === 0 && /[+-]/.test(temp[i])) {
      continue
    }
    if (/\d/.test(temp[i])) {
      result = result * 10 + temp[i] * 1
      if (result * isMinus < Math.pow(-2, 31)) {
        return Math.pow(-2, 31)
      }
      if (result * isMinus > Math.pow(2, 31) - 1) {
        return Math.pow(2, 31) - 1
      }
    } else break
  }
  return result * isMinus
}
let a = myAtoi_func2(' -42')
console.log(a)
