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
function generateParenthesis_func2(n) {
  const rule = ['(', ')']
  const result = []
  const temp = []

  function backTrack() {
    if (temp.length === n * 2) {
      if (check(temp)) {
        result.push(temp.join(''))
      }
      return
    }

    for (let i = 0; i < rule.length; i++) {
      temp.push(rule[i])
      backTrack()
      temp.pop()
    }
  }

  function check(arr) {
    let balance = 0

    for (let i = 0; i < arr.length; i++) {
      balance += arr[i] === '(' ? 1 : -1
      if (balance < 0) {
        return false
      }
    }
    return balance === 0
  }

  backTrack()
  return result
}
