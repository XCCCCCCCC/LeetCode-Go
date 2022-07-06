const mergeKLists = (lists) => {
  const mergeTwoLists = (list1, list2) => {
    let temp = new ListNode(-1)
    let prev = temp
    while (list1 && list2) {
      if (list1.val >= list2.val) {
        prev.next = list2
        list2 = list2.next
      } else {
        prev.next = list1
        list1 = list1.next
      }
      prev = prev.next
    }
    prev.next = list1 === null ? list2 : list1
    return temp.next
  }
  if (!lists.length) {
    return []
  }
  let temp = null
  let i = 0
  while (i < lists.length) {
    temp = mergeTwoLists(temp, lists[i])
    i++
  }
  return temp
}
