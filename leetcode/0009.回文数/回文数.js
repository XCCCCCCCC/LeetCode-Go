const isPalindrome_func1 = (x) => {
  let temp = x.toString().split('')
  let reversedTemp = temp.slice().reverse()
  if (temp.join('') === reversedTemp.join('')) {
    return true
  }
  return false
}
const isPalindrome_func2 = (x) => {
  if (x < 0 || (!(x % 10) && x)) {
    return false
  }
  let temp = 0
  let cpX = x
  while (cpX) {
    temp = temp * 10 + (cpX % 10)
    cpX = parseInt(cpX / 10)
  }
  return temp === x
}
const a = isPalindrome_func2(123)
console.log(a)
