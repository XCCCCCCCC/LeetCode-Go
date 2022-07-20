const solveSudoku_func1 = (board) => {
  const recusiveSolveSudoku = (row, col) => {
    if (col === board.length) {
      col = 0
      row++
      if (row === board.length) {
        return true
      }
    }
    if (board[row][col] === '.') {
      for (let num = 0; num < 9; num++) {
        if (!(numsX[row][num] || numsY[col][num] || numsB[Math.floor(row / 3)][Math.floor(col / 3)][num])) {
          numsX[row][num] = numsY[col][num] = numsB[Math.floor(row / 3)][Math.floor(col / 3)][num] = true
          board[row][col] = (num + 1).toString()
          if (recusiveSolveSudoku(row, col + 1)) {
            return true
          }
          board[row][col] = '.'
          numsX[row][num] = numsY[col][num] = numsB[Math.floor(row / 3)][Math.floor(col / 3)][num] = false
        }
      }
    } else {
      return recusiveSolveSudoku(row, col + 1)
    }
    return false
  }
  const numsX = new Array(9).fill(false).map(() => new Array(9).fill(false))
  const numsY = new Array(9).fill(false).map(() => new Array(9).fill(false))
  const numsB = new Array(3).fill(false).map(() => new Array(3).fill(false).map(() => new Array(9).fill(false)))
  console.log(numsX, numsY, numsB)
  for (let i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      if (board[i][j] !== '.') {
        const digit = Number(board[i][j]) - 1
        numsX[i][digit] = numsY[j][digit] = numsB[Math.floor(i / 3)][Math.floor(j / 3)][digit] = true
      }
    }
  }
  if (recusiveSolveSudoku(0, 0)) {
    return board
  }
}
let a = solveSudoku_func1([
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
])
console.log(a)
