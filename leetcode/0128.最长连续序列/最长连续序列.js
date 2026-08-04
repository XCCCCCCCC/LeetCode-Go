// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive1 = function (nums) {
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

var longestConsecutive2 = function (nums) {
  let set = new Set(nums)
  let max = 0
  for (let num of set) {
    if (set.has(num - 1)) {
      continue
    }
    let y = num + 1
    while (set.has(y)) {
      y++
    }
    max = Math.max(max, y - num)
  }
  return max
};