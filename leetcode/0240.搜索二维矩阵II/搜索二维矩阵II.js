// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let rows = matrix.length
  let row = 0
  let column = matrix[0].length - 1
  while (row < rows && column >= 0) {
    if (target === matrix[row][column]) {
      return true
    } else if (target > matrix[row][column]) {
      row++
    } else {
      column--
    }
  }
  return false
};
