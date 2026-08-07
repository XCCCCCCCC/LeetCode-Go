// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf_func1 = function (nums) {
  let result = new Array(nums.length).fill(1)
  let left = new Array(nums.length).fill(1)
  let right = new Array(nums.length).fill(1)
  let leftTemp = 1
  let rightTemp = 1
  for (let i = 1; i < nums.length; i++) {
    leftTemp *= nums[i - 1]
    left[i] = leftTemp
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    rightTemp *= nums[i + 1]
    right[i] = rightTemp
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i]
  }
  return result
};

var productExceptSelf_func2 = function (nums) {

};