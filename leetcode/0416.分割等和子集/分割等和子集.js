// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  let result = []
  function traceBack(node) {
    if (node === null) {
      return
    }
    traceBack(node.left)
    result.push(node.val)
    traceBack(node.right)
  }
  return result
};
