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
const swapPairs_func3 = (head) => {
  let doy = new ListNode(-1)
  doy.next = head
  let prev = doy
  let cur = head
  while (cur !== null && cur.next !== null) {
    let temp = cur.next.next
    let next = cur.next
    prev.next = next
    next.next = cur
    cur.next = temp
    prev = cur
    cur = temp
  }
  return doy.next
}
