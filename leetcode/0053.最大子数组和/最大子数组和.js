// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray_func1 = function (nums) {
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    let temp = 0
    for (let j = i; j < nums.length; j++) {
      temp += nums[j]
      max = Math.max(max, temp)
    }
  }
  return max
};
var maxSubArray_func2 = function (nums) {
  let max = nums[0]
  let pre = nums[0]
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i])
    max = Math.max(max, pre)
  }
  return max
};
