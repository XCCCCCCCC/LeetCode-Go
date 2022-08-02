const permuteUnique_func1 = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  const exist = []
  const temp = []
  const backTrack = () => {
    if (temp.length === nums.length) {
      result.push(temp.slice())
      return true
    }
    for (let i = 0; i < nums.length; i++) {
      if (exist[i] || (i > 0 && nums[i] === nums[i - 1] && !exist[i - 1])) {
        continue
      }
      temp.push(nums[i])
      exist[i] = true
      backTrack()
      exist[i] = false
      temp.pop()
    }
  }
  backTrack()
  return result
}
let a = permuteUnique_func1([3, 3, 0, 3])
console.log(a)
