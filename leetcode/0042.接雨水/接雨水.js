const trap_func1 = (height) => {
  const floor = Math.max(...height)
  let result = 0
  for (let i = 1; i <= floor; i++) {
    let temp = -1
    for (let j = 0; j < height.length; j++) {
      if (height[j] >= i) {
        if (temp > 0) {
          result += temp
          temp = 0
        }
        temp = 0
      } else if (temp !== -1) {
        temp++
      }
    }
  }
  return result
}
let a = trap_func1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
console.log(a)
