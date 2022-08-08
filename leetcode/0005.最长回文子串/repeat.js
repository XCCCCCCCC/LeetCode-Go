const longestPalindrome = (s) => {
  if (s.length === 1) {
    return s
  }
  const expandAroundCenter = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
    }
    if (s.substring(left, right + 1).length >= result.length) {
      result = s.substring(left, right + 1)
    }
  }
  let result = ''
  for (let i = 0; i < s.length - 1; i++) {
    expandAroundCenter(i, i)
    expandAroundCenter(i, i + 1)
  }
  return result
}
let a = longestPalindrome('abab')
console.log(a)
