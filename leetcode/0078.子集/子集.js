// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = []
  let temp = []
  function backTrack(start) {
    result.push([...temp])
    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i])
      backTrack(i + 1)
      temp.pop()
    }
  }
  backTrack(0)
  return result
};
