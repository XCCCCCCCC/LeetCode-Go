const searchInsert_func1 = (nums, target) => {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = parseInt((left + right) / 2)
    if (target < nums[mid]) {
      right = mid - 1
    } else if (target > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return left
}
let a = searchInsert_func1([1, 3, 5, 6], 2)
console.log(a)
