// 数组方法超出时间限制
const firstMissingPositive_func1 = (nums) => {
  let temp = 1
  nums.sort((a, b) => a - b)
  while (nums.includes(temp)) {
    temp++
  }
  return temp
}
// 建立哈希表
const firstMissingPositive_func2 = (nums) => {
  let temp = 1
  const tempSet = new Set(nums)
  while (tempSet.has(temp)) {
    temp++
  }
  return temp
}
let a = firstMissingPositive_func1([3, 4, -1, 1])
console.log(a)
