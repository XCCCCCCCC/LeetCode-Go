// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  let result = []
  for (const current of intervals) {
    const last = result[result.length - 1]
    if (!result.length || last[1] < current[0]) {
      result.push(current)
    } else {
      last[1] = Math.max(last[1], current[1])
    }
  }
  return result
};
