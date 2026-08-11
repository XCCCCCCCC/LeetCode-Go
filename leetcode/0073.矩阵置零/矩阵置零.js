// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let tempX = new Array(matrix.length).fill(false)
  let tempY = new Array(matrix[0].length).fill(false)
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        tempX[i] = true
        tempY[j] = true
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      if (tempX[i] || tempY[j]) {
        matrix[i][j] = 0
      }
    }
  }
};
