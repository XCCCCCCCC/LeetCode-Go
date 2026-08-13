const removeNthFromEnd_func1 = (head, n) => {
  let slow = head
  let fast = head
  while (n--) {
    fast = fast.next
  }
  if (!fast) {
    return head.next
  }
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return head
}
const removeNthFromEnd_func2 = (head, n) => {
  let temp = head
  let gun = head
  let index = 0
  while (temp.next) {
    temp = temp.next
    index++
  }
  let step = index - n
  if (step < 0) {
    return head.next
  }
  while (step) {
    gun = gun.next
    step--
  }
  gun.next = gun.next.next
  return head
}
var removeNthFromEnd_func3 = function (head, n) {
  let temp = head
  let count = 0
  while (temp !== null) {
    temp = temp.next
    count++
  }

  let target = count - n
  if (target <= 0) {
    return head.next
  }
  temp = head
  count = 1
  while (temp !== null) {
    if (count === target) {
      temp.next = temp.next ? temp.next.next : null
      return head
    }
    count++
    temp = temp.next
  }
  return head
};