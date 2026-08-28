// TODO(hot100): 完成解法后删除本行。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit_func1 = function (prices) {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(prices[j] - prices[i], max)
    }
  }
  return max
};
var maxProfit_func2 = function (prices) {
  let max = 0
  let minPrice = prices[0]
  for (let i = 0; i < prices.length; i++) {
    max = Math.max(prices[i] - minPrice, max)
    minPrice = Math.min(minPrice, prices[i])
  }
  return max
}
