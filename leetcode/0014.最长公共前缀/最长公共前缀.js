const longestCommonPrefix = (strs) => {
  strs.sort((a, b) => {
    if (a.length < b.length) {
      return -1
    }
    if (a.length === b.length) {
      return 0
    }
    if (a.length > b.length) {
      return 1
    }
  })
  let prefix = strs[0]
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if (strs[i][j] !== prefix[j]) {
        sign = false
        prefix = prefix.substring(0, j)
      }
    }
  }
  return prefix
}
let a = longestCommonPrefix(['faf', 'fadadadada', 'fass'])
console.log(a)
