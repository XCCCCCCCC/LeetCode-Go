const lengthOfLongestSubString = (s) => {
  if (!s.length) {
    return 0
  }
  let result = 0
  let temp = ''
  let left = 0
  let right = 0
  while (right < s.length) {
    if (temp.includes(s[right])) {
      left += temp.indexOf(s[right]) + 1
    }
    temp = s.substring(left, right + 1)
    if (temp.length > result) {
      result = temp.length
    }
    right++
  }
  return result
}
let a = maxLengthStr('11111')
console.log(a)
