// TODO(hot100): 完成解法后删除本行。
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) {
    return []
  }
  let result = []
  let queue = [root]
  let head = 0
  while (head < queue.length) {
    const levelSize = queue.length - head
    const currentLevel = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue[head]
      head++
      currentLevel.push(node.val)
      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }
    result.push(currentLevel)
  }
  return result
};
