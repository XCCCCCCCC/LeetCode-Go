/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let formattedS = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0
  let right = formattedS.length - 1
  while (left < right) {
    if (formattedS[left] !== formattedS[right]) {
      return false
    }
    left++
    right--
  }
  return true
};
