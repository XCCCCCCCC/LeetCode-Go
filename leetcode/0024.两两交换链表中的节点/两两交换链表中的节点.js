const swapPairs_func1 = (head) => {
  let temp = new ListNode(-1)
  temp.next = head
  let prev = temp
  while (prev && prev.next && prev.next.next) {
    const node1 = prev.next
    const node2 = prev.next.next
    prev.next = node2
    node1.next = node2.next
    node2.next = node1
    prev = node1
  }
  return temp.next
}

const swapPairs_func2 = (head) => {
  if (head === null || head.next === null) {
    return head
  }
  const temp = head.next
  head.next = swapPairs_func2(temp.next)
  temp.next = head
  return temp
}
