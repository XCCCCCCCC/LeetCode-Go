const isValidSudoku_func1 = (board) => {
  const dic = [
    [0, 0],
    [0, 3],
    [0, 6],
    [3, 0],
    [6, 0],
    [3, 3],
    [6, 6],
    [6, 3],
    [3, 6],
  ]
  const checkBox = (x, y) => {
    const NUMBER = []
    for (let i = x; i < x + 3; i++) {
      if (NUMBER.includes(board[i][y]) && board[i][y] !== '.') {
        return false
      }
      NUMBER.push(board[i][y])
    }
    for (let j = y + 1; j < y + 3; j++) {
      if (NUMBER.includes(board[x][j]) && board[x][j] !== '.') {
        return false
      }
      NUMBER.push(board[x][j])
    }
    for (let i = x + 1, j = y + 1; j < y + 3; i++, j++) {
      if (NUMBER.includes(board[i][j]) && board[i][j] !== '.') {
        return false
      }
      NUMBER.push(board[i][j])
    }

    if (NUMBER.includes(board[x + 2][y + 1]) && board[x + 2][y + 1] !== '.') {
      return false
    }
    NUMBER.push(board[x + 2][y + 1])
    if (NUMBER.includes(board[x + 1][y + 2]) && board[x + 1][y + 2] !== '.') {
      return false
    }
    NUMBER.push(board[x + 1][y + 2])
    return true
  }
  for (let i = 0; i < dic.length; i++) {
    if (!checkBox(dic[i][0], dic[i][1])) {
      return false
    }
  }
  const checkAxis = () => {
    for (let i = 0; i < 9; i++) {
      const NUMBER_X = []
      const NUMBER_Y = []
      for (let j = 0; j < 9; j++) {
        if (NUMBER_X.includes(board[i][j]) && board[i][j] !== '.') {
          return false
        }
        NUMBER_X.push(board[i][j])
        if (NUMBER_Y.includes(board[j][i]) && board[j][i] !== '.') {
          return false
        }
        NUMBER_Y.push(board[j][i])
      }
    }
    return true
  }
  return checkAxis()
}
const isValidSudoku_func2 = (board) => {
  const numsX = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const numsY = new Array(9).fill(0).map(() => new Array(9).fill(0))
  const numsB = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const index = Number(board[i][j]) - 1
        numsX[i][index]++
        numsY[j][index]++
        numsB[Math.floor(i / 3)][Math.floor(j / 3)][index]++
        if (numsX[i][index] > 1 || numsY[j][index] > 1 || numsB[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false
        }
      }
    }
  }
  return true
}
// let a = isValidSudoku_func1([
//   ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
//   ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
//   ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
//   ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
//   ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
// ])
let a = isValidSudoku_func2([
  ['.', '.', '4', '.', '.', '.', '6', '3', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['5', '.', '.', '.', '.', '.', '.', '9', '.'],
  ['.', '.', '.', '5', '6', '.', '.', '.', '.'],
  ['4', '.', '3', '.', '.', '.', '.', '.', '1'],
  ['.', '.', '.', '7', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '5', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
  ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
])
// isValidSudoku_func2()
console.log(a)
