const letterCombinations_func1 = (digits) => {
  if (!digits.length) {
    return []
  }
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  let temp = []
  let i = 0
  const pushLetters = (str) => {
    let arr = []
    if (!temp.length) {
      for (let i = 0; i < str.length; i++) {
        arr.push(str[i])
      }
    } else {
      for (let j = 0; j < temp.length; j++) {
        for (let i = 0; i < str.length; i++) {
          arr.push(temp[j] + str[i])
        }
      }
    }
    temp = arr
    if (i + 1 < digits.length) {
      i++
      pushLetters(map[digits[i]])
    }
  }
  pushLetters(map[digits[i]])
  return temp
}
let a = letterCombinations_func1('2356')
console.log(a)
