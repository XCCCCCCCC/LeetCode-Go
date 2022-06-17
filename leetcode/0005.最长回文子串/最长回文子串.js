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
// console.log(longestPalindrome_func1('babad'))
