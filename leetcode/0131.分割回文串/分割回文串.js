// TODO(hot100): 完成解法后删除本行。
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let result = []
  let temp = []
  function check(arr) {
    let i = 0
    let j = arr.length - 1
    while (i <= j) {
      if (arr[i] !== arr[j]) {
        return false
      }
      i++
      j--
    }
    return true
  }
  function backTrack(index) {
    if (index === s.length) {
      result.push([...temp])
      return
    }
    for (let i = index; i < s.length; i++) {
      const part = s.slice(index, i + 1)
      if (!check(part)) {
        continue
      }
      temp.push(part)
      backTrack(i + 1)
      temp.pop()
    }
  }
  backTrack(0)
  return result
};
