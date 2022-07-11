const divide_func1 = (dividend, divisor) => {
  const MAX = 2 ** 31 - 1
  const MIN = -(2 ** 31)
  if (dividend === MIN && divisor === -1) {
    return MAX
  }
  let temp = 0
  let sign = (dividend ^ divisor) < 0
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)
  while (dividend >= divisor) {
    dividend -= divisor
    temp++
  }
  return sign ? -temp : temp
}
let a = divide_func1()
console.log(a)
