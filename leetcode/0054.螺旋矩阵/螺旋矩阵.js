// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const rows = matrix.length
  const columns = matrix[0].length
  const result = []
  let top = 0
  let left = 0
  let bottom = rows - 1
  let right = columns - 1
  while (result.length < rows * columns) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i])
    }
    top++
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right])
    }
    right--
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i])
      }
      bottom--
    }
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left])
      }
      left++
    }

  }
  return result
};
