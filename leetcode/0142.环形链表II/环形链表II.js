// TODO(hot100): 完成解法后删除本行。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let temp = new Set()
  while (head !== null) {
    if (temp.has(head)) {
      return head
    }
    temp.add(head)
    head = head.next
  }
  return null
};
