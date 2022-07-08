const removeDuplicates_func1 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) < i) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
const removeDuplicates_func2 = (nums) => {
  if (!nums.length) {
    return 0
  }
  let fast = 1
  let slow = 1
  while (fast < nums.length) {
    if (nums[fast - 1] !== nums[fast]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
}
let a = removeDuplicates_func1([1, 2, 2, 3, 4, 5, 5, 7])
console.log(a)
