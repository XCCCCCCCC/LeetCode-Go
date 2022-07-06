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
const addTwoNumbers_func2 = (l1, l2) => {
  let temp = new ListNode(-1)
  let result = temp
  let prev = false
  let cur = false
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + Number(prev)
    if (sum >= 10) {
      sum -= 10
      cur = true
    } else {
      cur = false
    }
    temp.next = new ListNode(sum)
    temp = temp.next
    prev = cur
    if (l1) {
      l1 = l1.next
    } else {
      l1 = null
    }
    if (l2) {
      l2 = l2.next
    } else {
      l2 = null
    }
  }
  if (prev) {
    temp.next = new ListNode(1)
  }
  return result.next
}
