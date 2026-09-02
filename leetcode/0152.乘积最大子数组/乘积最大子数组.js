// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let result = nums[0]
  let maxEnd = nums[0]
  let minEnd = nums[0]
  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i]
    const prevMax = maxEnd
    const prevMin = minEnd
    maxEnd = Math.max(
      cur,
      prevMax * cur,
      prevMin * cur
    )
    minEnd = Math.min(
      cur,
      prevMax * cur,
      prevMin * cur
    )
    result = Math.max(result, maxEnd)
  }
  return result
};
