const fourSum_func1 = (nums, target) => {
  if (nums.length < 4) {
    return []
  }
  nums.sort((a, b) => a - b)
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let L = j + 1
      let R = nums.length - 1
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R]
        if (sum === target) {
          temp.push([nums[i], nums[j], nums[L], nums[R]])
          while (nums[L] === nums[L + 1]) {
            L++
          }
          while (nums[R] === nums[R - 1]) {
            R--
          }
          L++
          R--
        }
        if (sum > target) {
          R--
        }
        if (sum < target) {
          L++
        }
      }
    }
  }
  return temp
}
let a = fourSum_func1([2, 2, 2, 2, 2], 8)
console.log(a)
