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
let a = removeNthFromEnd_func2([1, 2, 3, 4, 5], 2)
console.log(a)
