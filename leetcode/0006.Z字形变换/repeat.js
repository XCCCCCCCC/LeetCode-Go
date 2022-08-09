const convert = (s, numRows) => {
  if (numRows < 2) {
    return s
  }
  const len = Math.min(s.length, numRows)
  const rows = new Array(len).fill('')
  let result = ''
  let loc = 0
  let down = 0
  for (let c of s) {
    rows[loc] += c
    if (loc === len - 1 || !loc) {
      down = !down
    }
    loc += down ? 1 : -1
  }
  for (let row of rows) {
    result += row
  }
  return result
}
const a = convert('PAYPALISHIRING', 3)
console.log(a)
