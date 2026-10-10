// TODO(interview150): 完成解法后删除本行。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let s2t = {}
  let t2s = {}
  for (let i = 0; i < s.length; i++) {
    let x = s[i]
    let y = t[i]
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false
    }
    s2t[x] = y
    t2s[y] = x
  }
  return true
};
