// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs_func1 = function (n) {
  let dic = [1, 2]
  let result = 0
  function backTrace(total) {
    if (total === n) {
      result += 1
      return
    }
    if (total > n) {
      return 0
    }
    for (let i = 0; i < dic.length; i++) {
      backTrace(total + dic[i])
    }
  }
  backTrace(0)
  return result
};
var climbStairs_func2 = function (n) {
  if (n <= 2) return n
  let prev1 = 1
  let prev2 = 2
  for (let i = 3; i <= n; i++) {
    let cur = prev1 + prev2
    prev1 = prev2
    prev2 = cur
  }
  return prev2
}