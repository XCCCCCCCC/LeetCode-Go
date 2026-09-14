<!-- top150-meta:start -->
> Top Interview 150 · 回溯 · 中等 · 已有代码
> [79. 单词搜索](https://leetcode.cn/problems/word-search/) · 标签：深度优先搜索 / 数组 / 字符串 / 回溯 / 矩阵
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 未开始
> [79. 单词搜索](https://leetcode.cn/problems/word-search/) · 标签：深度优先搜索 / 数组 / 字符串 / 回溯 / 矩阵
<!-- hot100-meta:end -->

# [79. 单词搜索](https://leetcode.cn/problems/word-search/)

## 解题思路

### 当前实现的核心模型

这题可以理解成：

> 从矩阵中的某个格子出发，按照上下左右移动，依次匹配 `word` 中的每个字符。

因为不知道单词从哪个格子开始，所以需要先遍历矩阵，把每个格子都当作起点：

```js
for (let row = 0; row < rows; row++) {
  for (let col = 0; col < columns; col++) {
    if (backTrack(row, col, 0)) {
      return true
    }
  }
}
```

这里的 `0` 表示从 `word[0]` 开始匹配。

### 递归函数的三个参数

当前函数：

```js
backTrack(i, j, index)
```

可以翻译为：

> 当前站在 `board[i][j]`，检查它能否作为 `word[index]`，并从这里继续完成剩余单词。

三个参数分别代表：

```text
i：当前行
j：当前列
index：当前需要匹配 word 的第几个字符
```

每走到相邻格子，单词位置也要向后移动：

```js
backTrack(newRow, newCol, index + 1)
```

这题的递归状态不是一个正在拼接的 `temp`，而是：

```text
当前位置 + 当前匹配进度 + 哪些格子已经使用
```

因此当前代码中的：

```js
let temp = ''
```

没有实际用途，可以删除。是否匹配成功由 `index` 表示，不需要额外拼出字符串。

### 失败边界：当前字符不匹配

```js
if (board[i][j] !== word[index]) {
  return false
}
```

当前格子连需要的字符都不等，就没有必要继续向四个方向搜索。

当前实现把矩阵越界和访问状态判断放在递归调用之前：

```js
if (
  newRow >= 0 && newRow < rows &&
  newCol >= 0 && newCol < columns &&
  !visited[newRow][newCol]
) {
  backTrack(...)
}
```

所以进入 `backTrack(i, j, index)` 时，`i`、`j` 已经保证合法，函数内部可以直接访问 `board[i][j]`。

另一种常见写法是直接递归四个方向，再在函数开头统一判断越界。两种方式都可以，当前写法是正确的。

### 成功边界：已经匹配最后一个字符

```js
if (index === word.length - 1) {
  return true
}
```

这个判断必须放在当前字符已经确认匹配之后。

例如：

```text
word = "AB"
index = 1
```

只有当前格子确实是 `B`，才能说最后一个字符匹配完成。

判断顺序是：

```text
先判断当前字符是否匹配；
匹配后再判断是否为最后一个字符。
```

### 做选择：标记当前格子已经使用

```js
visited[i][j] = true
```

这相当于前面回溯题中的：

```js
path.push(choice)
```

题目规定一条路径中不能重复使用同一个格子，所以进入四个方向之前，需要标记当前位置。

`visited` 矩阵与 `board` 大小相同：

```text
false：当前路径还没有使用这个格子
true：当前路径已经使用这个格子
```

这里记录的是“当前路径”的访问状态，不是整个搜索过程永久不能再用。不同起点、不同路径仍然可以重新使用这些格子。

### 当前选择：上下左右四个方向

```js
const directions = [
  [-1, 0], // 上
  [1, 0],  // 下
  [0, -1], // 左
  [0, 1],  // 右
]
```

当前位置是 `(i, j)`，新位置为：

```js
const newRow = i + directions[k][0]
const newCol = j + directions[k][1]
```

只有新位置满足下面三个条件才能继续：

```text
行没有越界；
列没有越界；
当前路径没有使用过该格子。
```

字符是否匹配则交给下一层 `backTrack` 判断。

### 撤销选择：恢复访问状态

四个方向都无法找到剩余单词时：

```js
visited[i][j] = false
return false
```

这表示：

> 以当前路径走法没有找到答案，退出当前格子，让其他搜索分支以后还能使用它。

这就是本题真正的回溯动作：

```text
进入格子：visited[i][j] = true
搜索邻居：递归
离开格子：visited[i][j] = false
```

### 当前代码可以优化的两个细节

#### 1. 成功分支没有恢复当前格子

当前写法：

```js
if (backTrack(newRow, newCol, index + 1)) {
  return true
}
```

成功后直接返回，当前层的：

```js
visited[i][j] = false
```

不会执行。

因为找到答案后整个搜索本应结束，这通常不会影响最终布尔结果；但当前外层循环只跳出内层循环，还可能继续从后续行开始搜索，因此会带着未恢复的 `visited` 继续运行。

更完整的写法是先记录结果，再统一恢复：

```js
let found = false

for (const [rowOffset, colOffset] of directions) {
  // 检查新位置
  if (backTrack(newRow, newCol, index + 1)) {
    found = true
    break
  }
}

visited[i][j] = false
return found
```

也可以在成功返回前先恢复：

```js
if (backTrack(...)) {
  visited[i][j] = false
  return true
}
```

#### 2. 外层找到答案后可以直接返回

当前代码使用：

```js
result = true
break
```

这个 `break` 只会跳出内层列循环，外层行循环仍然会继续。

可以直接写：

```js
if (backTrack(row, col, 0)) {
  return true
}
```

所有起点都失败后：

```js
return false
```

这样不需要：

```js
let result = false
```

逻辑也更符合“找到一条路径立即结束”的题目性质。

### 更紧凑的推荐结构

```js
var exist = function (board, word) {
  const rows = board.length
  const columns = board[0].length
  const visited = Array.from(
    { length: rows },
    () => new Array(columns).fill(false)
  )
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

  function backTrack(row, col, index) {
    if (board[row][col] !== word[index]) {
      return false
    }

    if (index === word.length - 1) {
      return true
    }

    visited[row][col] = true

    for (const [rowOffset, colOffset] of directions) {
      const newRow = row + rowOffset
      const newCol = col + colOffset

      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < columns &&
        !visited[newRow][newCol] &&
        backTrack(newRow, newCol, index + 1)
      ) {
        visited[row][col] = false
        return true
      }
    }

    visited[row][col] = false
    return false
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (backTrack(row, col, 0)) {
        return true
      }
    }
  }

  return false
}
```

当前实现已经具备这套结构，只需要整理未使用变量和提前返回逻辑。

### 机考五问

```text
path：当前已经走过的矩阵格子，由 visited 表示
choice：上、下、左、右四个方向
invalid：越界、已经访问、字符不匹配
finish：当前格子匹配 word 的最后一个字符
restore：离开当前格子前，把 visited 改回 false
```

### 与前面回溯题的区别

```text
46、78、39：修改 path 数组，递归后执行 path.pop()
79：修改 visited 状态，递归后执行 visited[row][col] = false
```

它们遵守的是同一个原则：

> 进入下一层前改了什么状态，离开下一层后就恢复什么状态。

核心不变量：进入 `backTrack(row, col, index)` 时，当前坐标合法且没有在本路径中被使用；`visited` 中为 `true` 的格子恰好表示当前搜索路径已经经过的格子。

### 复杂度

矩阵有 `m × n` 个起点。每一步最多尝试四个方向，但由于不能立刻走回已经访问的格子，第一步以后通常最多有三个新方向。设单词长度为 `L`：

```text
时间复杂度：O(m × n × 3^L)，也常宽松写成 O(m × n × 4^L)
空间复杂度：O(m × n + L)
```

`visited` 使用 `O(m × n)`，递归调用栈最多为单词长度 `L`。

## 边界条件

- 单格矩阵：当前字符等于单词时返回 `true`，否则返回 `false`。
- 单词长度大于格子数量：一定无法完成，可以提前返回 `false`，当前代码也会自然搜索失败。
- 同一格子不能重复使用：例如 `[['A','A']]` 搜索 `"AAA"` 应返回 `false`。
- 单词可能从任意格子开始，因此外层必须遍历全部起点。
- 矩阵越界必须在访问 `board[newRow][newCol]` 前排除。
- 搜索失败时必须恢复 `visited`，否则会影响其他分支。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

判断给定单词能否由字符网格中上下左右相邻单元格依次组成。

### 官方示例

#### 示例 1

```text
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCCED"
输出 = true
```

#### 示例 2

```text
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "SEE"
输出 = true
```

#### 示例 3

```text
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
word = "ABCB"
输出 = false
```

### 约束与训练提示

- m == board.length
- n = board[i].length
- 1 <= m, n <= 6
- 1 <= word.length <= 15
- board 和 word 仅由大小写英文字母组成
- 同一单元格在一条路径中不能重复使用。
- 回溯离开单元格时需恢复访问状态。

### 本题测试

```bash
npm run test:problem -- 79
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-16
- 结果：根据提示完成首版，官方与额外边界测试通过
- 用时：
- 提交次数：
- 核心模型：从每个格子出发，匹配当前字符，标记访问后向四个方向搜索下一个字符
- 核心不变量：`visited` 中为 true 的格子就是当前路径已经使用的格子，进入下一层时 index 增加 1
- 时间复杂度：O(m×n×3^L)，宽松上界 O(m×n×4^L)
- 空间复杂度：O(m×n+L)
- 错误标签：成功分支恢复 / 外层提前返回 / 状态设计
- 最小反例：`[['A','A']]` 搜索 `"AAA"`，不能重复使用已有格子
- D+1：2026-08-17，删除无用变量，改为找到后直接返回并保证成功分支也恢复状态
- D+3：2026-08-19，闭卷写出 `(row, col, index)` 与四方向版本
- D+7：2026-08-23，口述 79 与 46/78 的撤销状态差异
<!-- hot100-training:end -->

<!-- top150-training:start -->
## 面试 150 训练复盘

- 训练日期：
- 结果：未开始 / 独立通过 / 提示后通过 / 题解后复现 / 未完成
- 用时：
- 提交次数：
- 核心模型：
- 核心不变量：
- 时间复杂度：
- 空间复杂度：
- 错误标签：
- 最小反例：
<!-- top150-training:end -->
