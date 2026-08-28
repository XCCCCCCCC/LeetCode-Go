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
const searchRange_func3 = (nums, target) => {
  let result = [-1, -1]
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      result[0] = mid
      right = mid - 1
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  left = 0
  right = nums.length - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] === target) {
      result[1] = mid
      left = mid + 1
    }
    if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return result
}
