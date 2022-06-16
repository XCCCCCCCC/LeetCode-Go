const twoSun_func1 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
const twoSun_func2 = (nums, target) => {
  const temp = {}
  for (let i = 0; i < nums.length; i++) {
    const last = target - nums[i]
    if (temp[last] !== undefined) {
      return [i, temp[last]]
    }
    temp[nums[i]] = i
  }
}
const twoSun_func3 = (nums, target) => {
  const temp = new Map()
  for (let i = 0; i < nums.length; i++) {
    const last = target - nums[i]
    if (temp.has(last)) {
      return [i, temp[last]]
    }
    temp.set(nums[i], i)
  }
}

twoSun_func2([2, 7, 11, 15], 9)
