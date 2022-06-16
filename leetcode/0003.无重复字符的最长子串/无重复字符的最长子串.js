const lengthOfLongestSubstring_func1 = (s) => {
  let temp = 0
  for (let left = 0; left < s.length; left++) {
    const arr = new Set()
    arr.add(s[left])
    for (let right = left + 1; right < s.length; right++) {
      if (arr.has(s[right])) {
        break
      }
      arr.add(s[right])
    }
    if (arr.size > temp) {
      temp = arr.size
    }
  }
  return temp
}
const lengthOfLongestSubString_func2 = (s) => {
  let temp = 0
  let left = 0
  let right = 0
  const arr = new Set()
  if (s.length < 1) {
    return 0
  }
  for (; right < s.length; right++) {
    if (arr.has(s[right])) {
      while (arr.has(s[right])) {
        arr.delete(s[left])
        left++
      }
    }
    arr.add(s[right])
    if (arr.size > temp) {
      temp = arr.size
    }
  }
  return temp
}
