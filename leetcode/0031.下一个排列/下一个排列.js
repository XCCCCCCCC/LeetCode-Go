const nextPermutation_func1 = (nums) => {
  let i = 0
  let j = 0
  for (let i = nums.length - 1; i > -1; i--) {
    let j = i - 1
    if (nums[j] < nums[i]) {
      for (let k = nums.length - 1; k > i - 1; k--) {
        if (nums[k] > nums[j]) {
          const temp = nums[k]
          nums[k] = nums[j]
          nums[j] = temp
          const last = nums.splice(i, nums.length).sort((a, b) => a - b)
          nums.push(...last)
          return nums
        }
      }
    }
  }
  if (i === 0) {
    nums.sort((a, b) => a - b)
    return nums
  }
}

const nextPermutation_func2 = (nums) => {}
// let a = nextPermutation_func1([1, 2, 3, 4, 8, 6, 5])
// let a = nextPermutation_func1([8, 6, 5, 4, 3, 2, 1])
let a = nextPermutation_func1([1, 2, 3, 4, 5])
console.log(a)
