const threeSum_func1 = (nums) => {
  if (nums.length < 3) {
    return []
  }
  nums.sort((a, b) => a - b)
  let temp = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > 0) {
      break
    }
    if (nums[i] === nums[i - 1]) {
      continue
    }
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        temp.push([nums[i], nums[L], nums[R]])
        L++
        R--
        while (nums[L] === nums[L - 1]) {
          L++
        }
        while (nums[R] === nums[R + 1]) {
          R--
        }
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return temp
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_func2 = function (nums) {
  nums.sort((a, b) => a - b)
  let result = []
  let quick = 0
  let slow = 0
  let shake = 0
  for (slow = 0; slow < nums.length; slow++) {
    if (slow > 0 && nums[slow] === nums[slow - 1]) continue;
    for (quick = slow + 1; quick < nums.length; quick++) {
      if (quick > slow + 1 && nums[quick] === nums[quick - 1]) continue;
      for (shake = quick + 1; shake < nums.length; shake++) {
        if (shake > quick + 1 && nums[shake] === nums[shake - 1]) continue;
        if (nums[slow] + nums[quick] + nums[shake] === 0) {
          result.push([nums[slow], nums[quick], nums[shake]])
        }
      }

    }
  }
  return result
};
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum_func3 = function (nums) {
  nums.sort((a, b) => a - b)
  if (nums.length < 3) {
    return []
  }
  if (nums[0] > 0) {
    return []
  }
  let result = []
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[0] > 0) {
      break
    }
    if (nums[cur] === nums[cur - 1]) {
      continue
    }
    let left = cur + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[cur] + nums[left] + nums[right]
      if (sum === 0) {
        result.push([nums[cur], nums[left], nums[right]])
        left++
        right--
        while (nums[left] === nums[left - 1]) {
          left++
        }
        while (nums[right] === nums[right + 1]) {
          right--
        }
      }
      if (sum > 0) {
        right--
      }
      if (sum < 0) {
        left++
      }

    }
  }
  return result
};