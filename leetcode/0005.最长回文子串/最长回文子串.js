const longestPalindrome_func1 = (s) => {
  let temp = 0
  let result = ''
  if (s.length <= 1) {
    return s
  }
  const isPalindrome = (s) => {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - 1 - i]) {
        return false
      }
    }
    return true
  }
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      if (s.substring(i, j).length > temp && isPalindrome(s.substring(i, j))) {
        temp = s.substring(i, j).length
        result = s.substring(i, j)
      }
    }
  }
  return result
}
const longestPalindrome_func2 = (s) => {
  let start = 0
  let end = 0
  let max = 0
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i)
    expandAroundCenter(i, i + 1)
  }
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    if (right - left - 1 > max) {
      max = right - left - 1
      start = left + 1
      end = right
    }
  }
  return s.substring(start, end)
}
console.log(longestPalindrome_func2('bb'))
