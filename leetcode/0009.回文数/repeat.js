// 整数翻转法
const isPalindrome = (x) => {
  let temp = 0
  let cpx = x
  while (cpx) {
    temp = temp * 10 + (cpx % 10)
    cpx = parseInt(cpx / 10)
  }
  return temp === x
}
const a = isPalindrome(12121)
console.log(a)
