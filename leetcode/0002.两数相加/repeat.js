const sum = (l1, l2) => {
  let result = new ListNode(-1)
  let temp = result
  let ans = 0
  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ans
    ans = 0
    if (sum > 9) {
      sum -= 10
      ans++
    }
    temp.next = new ListNode(sum)
    temp = temp.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (ans) {
    temp.next = new ListNode(ans)
  }
  return result.next
}
