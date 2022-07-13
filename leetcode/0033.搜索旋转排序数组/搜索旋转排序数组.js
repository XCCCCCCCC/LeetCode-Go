const search_func1 = (nums, target) => {
  return nums.indexOf(target)
}

const search_func2 = (nums, target) => {
  if (!nums.length) {
    return -1
  }
  if (nums.length === 1 && nums[0] === target) {
    return 0
  }
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = parseInt((left + right) / 2)
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid
      } else {
        right = mid - 1
      }
    }
  }
  return left === right && target === nums[left] ? left : -1
}

let a = search_func2([4, 5, 6, 7, 0, 1, 2], 7)
console.log(a)
