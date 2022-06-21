const reverse_func1 = (x) => {
  let isMinus = false
  let sign = ''
  if (x < 0) {
    isMinus = true
  }
  let temp = x.toString().split('')
  if (isMinus) {
    sign = temp.shift()
  }
  temp.reverse()
  temp = sign + temp.join('')
  temp = parseInt(temp)
  if (temp < Math.pow(-2, 31) || temp > Math.pow(2, 31) - 1) {
    return 0
  }
  return temp
}
reverse_func1(-123000)
