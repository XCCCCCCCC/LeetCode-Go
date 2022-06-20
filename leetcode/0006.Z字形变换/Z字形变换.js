const convert_func1 = (s, numRows) => {
  if (s.length <= numRows) {
    return s
  }
  s = s.split('')
  const temp = []
  let subTemp = []
  let i = 0
  while (s.length) {
    if (subTemp.length < numRows) {
      subTemp.push(s.shift())
    } else {
      temp.push(subTemp.slice())
      subTemp = []
      for (let i = numRows - 2; i > 0; i--) {
        let z = new Array(numRows).fill('')
        z[i] = s.shift()
        temp.push(z)
      }
    }
  }
  temp.push(subTemp.slice())
  let result = ''
  for (let j = 0; j < numRows; j++) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i][j]) {
        result += temp[i][j]
      }
    }
  }
  return result
}
const convert_func2 = (s, numRows) => {
  if (numRows < 2) {
    return s
  }
  let len = Math.min(s.length, numRows)
  let rows = new Array(len).fill('')
  let loc = 0
  let down = false
  for (let c of s) {
    rows[loc] += c
    if (loc === numRows - 1 || !loc) {
      down = !down
    }
    loc += down ? 1 : -1
  }
  let result = ''
  for (let row of rows) {
    result += row
  }
  return result
}
convert_func2('PAYPALISHIRING', 4)
