const maxArea_func1 = (height) => {
  let temp = 0
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      if (Math.min(height[i], height[j]) * (j - i) > temp) {
        temp = Math.min(height[i], height[j]) * (j - i)
      }
    }
  }
  return temp
}
const maxArea_func2 = (height) => {
  let l = 0
  let r = height.length - 1
  let temp = 0
  while (l < r) {
    if (Math.min(height[l], height[r]) * (r - l) > temp) {
      temp = Math.min(height[l], height[r]) * (r - l)
    }
    if (height[l] > height[r]) {
      r--
    } else {
      l++
    }
  }
  return temp
}
let a = maxArea_func2([1, 1])
console.log(a)
