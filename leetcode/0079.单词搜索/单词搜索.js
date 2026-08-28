// TODO(hot100): 完成解法后删除本行。
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist_func1 = function (board, word) {
  let w = board.length
  let h = board[0].length
  let visited = new Array(w).fill(0).map(() => new Array(h).fill(false))
  let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]
  function backTrack(i, j, index) {
    if (board[i][j] !== word[index]) {
      return false
    }
    if (index === word.length - 1) {
      return true
    }
    visited[i][j] = true
    for (let k = 0; k < 4; k++) {
      let newRow = i + direction[k][0]
      let newCol = j + direction[k][1]
      if (newRow >= 0 && newRow < w && newCol >= 0 && newCol < h && !visited[newRow][newCol]) {
        if (backTrack(newRow, newCol, index + 1)) {
          return true
        }
      }
    }
    visited[i][j] = false
    return false
  }
  for (let row = 0; row < w; row++) {
    for (let col = 0; col < h; col++) {
      if (backTrack(row, col, 0)) {
        return true
      }
    }
  }
  return false
};
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist_func2 = function (board, word) {
  let w = board.length
  let h = board[0].length
  let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let visited = new Array(w).fill(0).map(item => new Array(h).fill(false))
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      if (backTrack(i, j, 0)) {
        return true
      }
    }
  }
  function backTrack(row, col, index) {
    if (board[row][col] !== word[index]) {
      return false
    }
    if (index === word.length - 1) {
      return true
    }
    visited[row][col] = true
    index++
    for (let d = 0; d < directions.length; d++) {
      let x = row + directions[d][0]
      let y = col + directions[d][1]
      if (x >= 0 && x < w.length && y >= 0 && y < h.length && !visited[x][y]) {
        if (backTrack(x, y, index)) {
          return true
        }
      }
    }
    visited[row][col] = false
    return false
  }
  return false
};
