const romanToInt_func1 = (s) => {
  let temp = 0
  const levels = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  while (s) {
    let i = 0
    while (i < roman.length) {
      if (s.includes(roman[i]) && !s.indexOf(roman[i])) {
        console.log(roman[i])
        temp += levels[i]
        s = s.replace(new RegExp(roman[i]), '')
        break
      }
      i++
    }
  }
  return temp
}
let a = romanToInt_func1('MCMXCIV')
console.log(a)
