// TODO(hot100): 完成解法后删除本行。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let result = new Set()
  let temp = headA
  while (temp != null) {
    result.add(temp)
    temp = temp.next
  }
  temp = headB
  while (temp !== null) {
    if (result.has(temp)) {
      return temp
    }
    temp = temp.next
  }
};
