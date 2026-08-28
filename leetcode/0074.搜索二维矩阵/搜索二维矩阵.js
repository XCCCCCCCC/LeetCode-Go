// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let left = 0
  let right = matrix.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (matrix[mid][matrix[mid].length - 1] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  let result = matrix[left]
  if (!result) {
    return false
  }
  let subL = 0
  let subR = result.length - 1
  while (subL <= subR) {
    let mid = subL + Math.floor((subR - subL) / 2)
    if (result[mid] === target) {
      return true
    }
    if (result[mid] < target) {
      subL = mid + 1
    } else {
      subR = mid - 1
    }
  }
  return false
};
