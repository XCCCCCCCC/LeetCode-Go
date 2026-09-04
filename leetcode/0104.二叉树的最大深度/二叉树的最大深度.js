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
 * @return {number}
 */
var maxDepth = function (root) {
  function dfs(node) {
    if (node === null) {
      return 0
    }
    let leftDeep = dfs(node.left)
    let rightDeep = dfs(node.right)
    return Math.max(leftDeep, rightDeep) + 1
  }
  return dfs(root)
};
