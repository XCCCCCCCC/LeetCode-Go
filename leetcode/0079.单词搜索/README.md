<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 未开始
> [79. 单词搜索](https://leetcode.cn/problems/word-search/) · 标签：深度优先搜索 / 数组 / 字符串 / 回溯 / 矩阵
<!-- hot100-meta:end -->

# [79. 单词搜索](https://leetcode.cn/problems/word-search/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

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

- 训练日期：
- 结果：未开始 / 独立通过 / 提示后通过 / 题解后复现 / 未完成
- 用时：
- 提交次数：
- 核心模型：
- 核心不变量：
- 时间复杂度：
- 空间复杂度：
- 错误标签：模型识别 / 不变量 / 边界条件 / 实现错误 / 复杂度 / 调试低效
- 最小反例：
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
