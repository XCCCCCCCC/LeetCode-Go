// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let dp = new Array(n + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      const square = j * j
      dp[i] = Math.min(dp[i], dp[i - square] + 1)
    }
  }
  return dp[n]
};
