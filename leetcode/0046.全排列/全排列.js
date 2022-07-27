const permute_func1 = (nums) => {
  if (nums.length === 1) {
    return [nums.slice()]
  }
  const result = []
  const temp = []
  const backTrack = () => {
    if (temp.length === nums.length) {
      result.push(temp.slice())
      return true
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) {
        continue
      }
      temp.push(nums[i])
      backTrack()
      temp.pop()
    }
  }
  backTrack()
  return result
}
let a = permute_func1([1])
console.log(a)
