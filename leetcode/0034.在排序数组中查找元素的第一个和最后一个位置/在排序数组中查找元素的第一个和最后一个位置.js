const searchRange_func1 = (nums, target) => {
  let temp = []
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = parseInt((left + right) / 2)
    if (target <= nums[mid]) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  temp.push(left)
  left = 0
  right = nums.length - 1
  while (left < right) {
    let mid = parseInt((left + right + 1) / 2)
    if (target >= nums[mid]) {
      left = mid
    } else {
      right = mid - 1
    }
  }
  temp.push(left)
  if (nums[temp[0]] === target) {
    return temp
  } else {
    return [-1, -1]
  }
}

const searchRange_func2 = (nums, target) => {
  const searchFirst = () => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = parseInt((left + right) / 2)
      if (target > nums[mid]) {
        left = mid + 1
      } else if (target < nums[mid]) {
        right = mid - 1
      } else {
        if (target !== nums[mid - 1]) {
          return mid
        }
        right = mid - 1
      }
    }
    return -1
  }
  const searchLast = () => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      let mid = parseInt((left + right) / 2)
      if (target > nums[mid]) {
        left = mid + 1
      } else if (target < nums[mid]) {
        right = mid - 1
      } else {
        if (target !== nums[mid + 1]) {
          return mid
        }
        left = mid + 1
      }
    }
    return -1
  }
  return [searchFirst(), searchLast()]
}
let a = searchRange_func2([1, 8, 8, 8, 8, 8, 8, 9, 10, 11, 23], 8)
console.log(a)
