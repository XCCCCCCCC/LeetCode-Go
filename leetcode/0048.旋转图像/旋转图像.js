// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate_func1 = function (matrix) {
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][n - j - 1]
      matrix[i][n - j - 1] = temp
    }
  }
  let corner = n - 1
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < corner; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][n - i - 1]
      matrix[n - j - 1][n - i - 1] = temp
    }
    corner--
  }

  return matrix
};

var rotate_func2 = function (matrix) {
  let n = matrix.length
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n / 2; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[i][n - j - 1]
      matrix[i][n - j - 1] = temp
    }
  }

  return matrix
}