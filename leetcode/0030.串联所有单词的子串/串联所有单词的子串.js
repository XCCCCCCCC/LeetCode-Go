const findSubstring_func1 = (s, words) => {
  const result = []
  const len = words[0].length
  const testString = (subS) => {
    console.log(subS)
    const arr = []
    const cpWords = words.slice()
    for (let i = 0; i < subS.length - len + 1; i++) {
      const temp = subS.substring(i, i + len)
      if (cpWords.includes(temp)) {
        arr.push(temp)
        cpWords.splice(
          cpWords.findIndex((item) => item === temp),
          1,
        )
        i += len - 1
        continue
      }
      return false
    }
    return arr.length === words.length
  }
  for (let i = 0; i < s.length; i++) {
    const temp = s.substring(i, i + len)
    if (words.includes(temp)) {
      const str = s.substring(i, i + len * words.length)
      if (str.length === len * words.length && testString(str)) {
        result.push(i)
        // i += len * words.length - 1
      }
    }
  }
  return result
}
// const a = findSubstring_func1('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])
// const a = findSubstring_func1('barfoothefoobarman', ['foo', 'bar'])
const a = findSubstring_func1('barfoofoobarthefoobarman', ['bar', 'foo', 'the'])
console.log(a)
