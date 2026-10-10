/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let result = ''
  for (let i = s.length - 1; i >= 0; i--) {
    if (result !== '' && s[i] === ' ') {
      return result.length
    } else if (s[i] === ' ') {
      continue
    } else {
      result += s[i]
    }
  }
  return result.length
};
