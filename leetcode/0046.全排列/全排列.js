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

const permute_func2 = (nums) => {
  let result = []
  let temp = []
  function backTrack() {
    if (temp.length === nums.length) {
      result.push([...temp])
      return
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