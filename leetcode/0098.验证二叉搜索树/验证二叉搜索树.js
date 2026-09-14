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
 * @return {boolean}
 */
var isValidBST = function (root) {
  function dfs(node, lower, upper) {
    if (node === null) {
      return true
    }
    if (lower >= node.val || upper <= node.val) {
      return false
    }
    return dfs(node.left, lower, node) && dfs(node.right, node.val, upper)
  }
  return dfs(root, -Infinity, Infinity)
};
