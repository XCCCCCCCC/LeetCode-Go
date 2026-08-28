// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let result = new Array(nums.length)
  for (let i = 0; i < nums.length; i++) {
    let prev1 = i - 1 >= 0 ? result[i - 1] : 0
    let prev2 = i - 2 >= 0 ? result[i - 2] : 0
    result[i] = Math.max(prev1, prev2 + nums[i])
  }
  return result[nums.length - 1]
};
