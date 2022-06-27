const threeSumClosest_func1 = (nums, target) => {
  let temp = Infinity
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(sum - target) < Math.abs(temp - target)) {
        temp = nums[i] + nums[L] + nums[R]
      }
      if (sum >= target) {
        R--
      }
      if (sum < target) {
        L++
      }
    }
  }
  return temp
}
let a = threeSumClosest_func1([1, 1, 1, 0], 100)
console.log(a)
