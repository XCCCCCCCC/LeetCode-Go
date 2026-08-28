// TODO(hot100): 完成解法后删除本行。
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const result = []
  const last = new Map()
  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i)
  }
  let start = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last.get(s[i]))
    if (i === end) {
      result.push(end - start + 1)
      start = end + 1
    }
  }

  return result
};
