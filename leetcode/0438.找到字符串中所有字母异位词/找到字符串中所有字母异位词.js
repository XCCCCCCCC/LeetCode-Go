// TODO(hot100): 完成解法后删除本行。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams_func1 = function (s, p) {
  let result = []
  let left = 0
  while (left < s.length) {
    if (left + p.length > s.length) {
      break
    }
    let sub = s.slice(left, left + p.length)
    let temp1 = [...sub].sort().toString()
    let temp2 = [...p].sort().toString()
    if (temp1 === temp2) {
      result.push(left)
    }
    left++
  }
  return result
};
var findAnagrams_func2 = function (s, p) {
  let result = []
  let head = 0
  let tail = 0
  let index = {}
  for (const char of p) {
    index[char] = (index[char] || 0) - 1
  }
  while (tail < s.length) {
    index[s[tail]] = (index[s[tail]] || 0) + 1
    if (tail - head + 1 > p.length) {
      index[s[head]]--
      head++
    }
    if (tail - head + 1 === p.length) {
      if (Object.values(index).every(v => v === 0)) {
        result.push(tail - p.length + 1)
      }
    }
    tail++
  }
  return result
};
