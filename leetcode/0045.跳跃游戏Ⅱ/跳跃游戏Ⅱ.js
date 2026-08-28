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
const jump_func2 = (nums) => {
  let step = 0
  if (nums.length === 1) {
    return step
  }
  function recur(index) {
    if (index === nums.length - 1) {
      return
    }
    if (index + nums[index] >= nums.length - 1) {
      step++
      return
    }
    let count = 0
    let next = 0
    const end = Math.min(index + nums[index], nums.length - 1)
    for (let i = index + 1; i <= end; i++) {
      if (i + nums[i] > count) {
        next = i
        count = i + nums[i]
      }
    }
    step++
    recur(next)
  }
  recur(0)
  return step
}