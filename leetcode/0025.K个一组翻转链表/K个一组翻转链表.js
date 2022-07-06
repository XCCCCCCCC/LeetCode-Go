const reverseKGroup = (head, k) => {
  let temp = head
  let prev = new ListNode(-1)
  let result = prev
  let i = 0
  let box = []
  while (temp.next) {
    box.push(temp)
    temp = temp.next
    i++
    if (i === k) {
      i = 0
      while (box.length) {
        prev.next = box.pop()
        prev = prev.next
      }
    }
  }
  while (box.length) {
    prev.next = box.shift()
    prev = prev.next
  }
  prev.next = null
  return result.next
}
