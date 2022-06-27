const threeSum_func1 = (nums) => {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > 0) {
      break
    }
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        temp.push([nums[i], nums[L], nums[R]])
        L++
        R--
        while (nums[L] === nums[L - 1]) {
          L++
        }
        while (nums[R] === nums[R + 1]) {
          R--
        }
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return temp
}
let a = threeSum_func1([0])
console.log(a)
