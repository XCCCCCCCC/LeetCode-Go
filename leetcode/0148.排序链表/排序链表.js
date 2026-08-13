/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (list1, list2) => {
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val > list2.val) {
    list2.next = merge(list1, list2.next)
    return list2
  } else {
    list1.next = merge(list1.next, list2)
    return list1
  }
}
const toSortList = (head, tail) => {
  if (head === null) {
    return head;
  }
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head, fast = head;
  while (fast !== tail) {
    slow = slow.next;
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
    }
  }
  const mid = slow;
  return merge(toSortList(head, mid), toSortList(mid, tail));
}
var sortList = function (head) {
  return toSortList(head, null);
}