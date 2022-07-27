const multiply_func1 = (num1, num2) => {
  const doAdd = (num) => {
    let cur = ''
    const len = Math.max(result.length, num.length)
    let carry = 0
    let i = 0
    while (i < len) {
      cur += (Number(num[i] || '0') + Number(result[i] || '0') + carry) % 10
      carry = Math.floor((Number(num[i] || '0') + Number(result[i] || '0') + carry) / 10)
      i++
    }
    if (carry) {
      cur += carry
    }
    return cur
  }
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  let result = ''
  for (let i = 0; i < num2.length; i++) {
    let carry = 0
    let sub = ''
    for (let k = 0; k < num2.length - i - 1; k++) {
      sub += '0'
    }
    for (let j = num1.length - 1; j >= 0; j--) {
      const temp = (num1[j] * num2[i] + carry) % 10
      sub += temp
      carry = Math.floor((num1[j] * num2[i] + carry) / 10)
    }
    if (carry) {
      sub += carry
    }
    result = doAdd(sub)
  }
  return result.split('').reverse().join('')
}
let a = multiply_func1('123', '987')
console.log(a)
