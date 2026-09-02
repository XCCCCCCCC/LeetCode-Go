// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS_func1 = function (nums) {
  let max = 0
  let temp = 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      temp++
    } else {
      max = Math.max(temp, max)
      temp = 1
    }
  }
  max = Math.max(max, temp)
  return max
};

var lengthOfLIS_func2 = function (nums) {
  let dp = new Array(nums.length).fill(1)
  let result = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    result = Math.max(result, dp[i])
  }
  return result
}