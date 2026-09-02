// TODO(hot100): 完成解法后删除本行。
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let wordDictSet = new Set(wordDict)
  let dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      let word = s.slice(j, i)
      if (dp[j] && wordDictSet.has(word)) {
        dp[i] = true
        break
      }
    }
  }
  return dp[s.length]
};
