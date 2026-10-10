/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let cnt = {}
  for (let c of magazine) {
    if (cnt[c]) {
      cnt[c]++
    } else {
      cnt[c] = 1
    }
  }
  for (let c of ransomNote) {
    if (cnt[c] === undefined) {
      return false
    } else {
      cnt[c]--
    }
  }
  return Object.values(cnt).filter(item => item < 0).length === 0
};
