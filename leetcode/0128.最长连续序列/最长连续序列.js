// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b)
  let max = 0
  let count = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      continue
    }
    if (nums[i] + 1 === nums[i + 1]) {
      count++
      continue
    }
    max = Math.max(max, count)
    count = 1
  }
  return max
};