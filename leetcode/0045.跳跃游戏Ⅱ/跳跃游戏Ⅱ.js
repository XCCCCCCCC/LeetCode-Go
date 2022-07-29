const jump_func1 = (nums) => {
  let ans = 0
  let cur = 0
  if (nums.length === 1) {
    return 0
  }
  if (nums[cur] >= nums.length - 1) {
    return 1
  }
  while (cur < nums.length - 1) {
    let temp = 0
    let index = 0
    for (let i = 1; i <= nums[cur]; i++) {
      if (nums[cur + i] + i >= temp) {
        temp = nums[cur + i] + i
        index = i
        if (nums[cur + i] + i + cur >= nums.length - 1) {
          return ans + 2
        }
      }
    }
    cur += index
    ans++
  }
  return ans
}
let a = jump_func1([1, 2, 1, 3, 4, 6, 3])
console.log(a)
