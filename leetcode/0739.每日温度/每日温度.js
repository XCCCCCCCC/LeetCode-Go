// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures_func1 = function (temperatures) {
  let result = []
  for (let i = 0; i < temperatures.length; i++) {
    let days = 0
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        days = j - i
        break
      }
    }
    result.push(days)
  }
  return result
};
var dailyTemperatures_func2 = function (temperatures) {
  let result = new Array(temperatures.length).fill(0)
  let stack = []
  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      let tail = stack.length - 1
      result[stack[tail]] = i - stack[tail]
      stack.pop()
    }
    stack.push(i)
  }
  return result
}