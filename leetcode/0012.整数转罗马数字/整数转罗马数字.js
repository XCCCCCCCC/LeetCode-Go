const intToRoman_func1 = (num) => {
  let temp = ''
  let src = num
  const levels = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  while (src > 0) {
    let i = 0
    while (i < levels.length) {
      if (src >= levels[i]) {
        src -= levels[i]
        temp += roman[i]
        break
      }
      i++
    }
  }
  return temp
}
let a = intToRoman_func1(1003)
console.log(a)
