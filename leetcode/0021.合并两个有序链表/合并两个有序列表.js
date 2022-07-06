const mergeTwoLists_func1 = (list1, list2) => {
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

const mergeTwoLists_func2 = (l1, l2) => {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists_func2(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists_func2(l1, l2.next)
    return l2
  }
}
