const generateParenthesis_func1 = (n) => {
  let temp = []
  const makeAll = (str) => {
    if (str.length === 2 * n) {
      temp.push(str)
    } else {
      makeAll(str + '(')
      makeAll(str + ')')
    }
  }
  makeAll('')
  temp = temp.filter((str) => {
    let balance = 0
    for (let c of str) {
      if (c === '(') {
        balance++
      } else {
        balance--
      }
      if (balance < 0) {
        return false
      }
    }
    return balance === 0
  })
  return temp
}
let a = generateParenthesis_func1(8)
console.log(a)
