const addTwoNumbers_func1 = (l1, l2) => {
  const temp = []
  let carry = 0
  const length = l1.length > l2.length ? l1.length : l2.length
  for (let i = 0; i < length; i++) {
    let sum = (l1[i] ? l1[i] : 0) + (l2[i] ? l2[i] : 0) + carry
    carry = 0
    if (sum > 9) {
      carry = 1
      sum -= 10
    }
    temp.push(sum)
  }
  if (carry) {
    temp.push(carry)
  }
  return temp
}
