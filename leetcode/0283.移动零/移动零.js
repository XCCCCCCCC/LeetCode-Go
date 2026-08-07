// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let slow = 0
  let quick = 0
  while (quick < nums.length) {
    if (nums[quick] !== 0) {
      let temp = nums[slow]
      nums[slow] = nums[quick]
      nums[quick] = temp
      slow++
    }
    quick++
  }
  return nums
};
