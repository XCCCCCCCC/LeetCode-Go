<!-- top150-meta:start -->
> Top Interview 150 · 一维动态规划 · 中等 · 已有代码
> [139. 单词拆分](https://leetcode.cn/problems/word-break/) · 标签：字典树 / 记忆化 / 数组 / 哈希表 / 字符串 / 动态规划 / Brute-Force Search
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 动态规划 · 中等 · 独立完成并通过
> [139. 单词拆分](https://leetcode.cn/problems/word-break/) · 标签：字典树 / 记忆化 / 数组 / 哈希表 / 字符串 / 动态规划 / Brute-Force Search
<!-- hot100-meta:end -->

# [139. 单词拆分](https://leetcode.cn/problems/word-break/)

## 解题思路

你的代码已经是标准的前缀 DP 写法。

### 1. 状态定义

```text
dp[i] = s 的前 i 个字符能否由字典中的单词拼接得到
```

注意 `dp[i]` 表示前 `i` 个字符，最终答案是 `dp[s.length]`。

### 2. 为什么 `dp[0] = true`

`dp[0] = true` 表示空字符串可以看作已经完成拆分。它支持第一个单词从下标 0 开始：如果 `s.slice(0, i)` 是字典单词，那么 `dp[i]` 就可以变成 `true`。

### 3. 枚举最后一个单词

计算 `dp[i]` 时，枚举最后一个单词的起点 `j`：

```js
const word = s.slice(j, i)
```

`slice(j, i)` 包含下标 `j`、不包含下标 `i`，对应 `s[j...i-1]`。

如果前 `j` 个字符已经可以拆分，并且这一段正好是字典中的单词，那么前 `i` 个字符也可以拆分：

```js
if (dp[j] && wordDictSet.has(word)) {
  dp[i] = true
  break
}
```

只要找到一种合法切法就可以停止，因为题目只问能不能拆分。

### 4. 以 `leetcode` 为例

```text
s = "leetcode"
wordDict = ["leet", "code"]
```

先有 `dp[0] = true`。发现 `s.slice(0, 4) = "leet"` 在字典中，所以 `dp[4] = true`；随后发现 `s.slice(4, 8) = "code"` 在字典中，所以 `dp[8] = true`，最终返回 `true`。

### 5. 你的代码逐段解释

```js
const wordDictSet = new Set(wordDict)
```

使用 `Set` 快速判断某一段是否是合法单词。

```js
const dp = new Array(s.length + 1).fill(false)
dp[0] = true
```

创建前缀状态数组，并设置空前缀为可拆分。

```js
for (let i = 1; i <= s.length; i++) {
  for (let j = 0; j < i; j++) {
    const word = s.slice(j, i)
    // 判断前缀 dp[j] 和最后一个单词
  }
}
```

外层枚举前缀终点，内层枚举最后一个单词的起点。

## 动态规划的核心

这题把“所有可能的切分方式”压缩成了布尔状态：

```text
前 j 个字符能拆分
加上一个合法单词
就能推出前 i 个字符能拆分
```

不同切分路径可能到达同一个 `j`，但只要知道 `dp[j]` 是否为 `true`，就不需要知道具体路径。

## 核心不变量

计算 `dp[i]` 时，`dp[j]` 表示前 `j` 个字符是否已经可以拆分，`s.slice(j, i)` 是当前尝试的最后一个单词。内层循环结束后，`dp[i]` 为 `true` 当且仅当至少存在一个合法的 `j`。

## 边界条件

- `dp[0]` 必须是 `true`；
- `j` 的范围是 `0 <= j < i`；
- `slice(j, i)` 的右边界不包含 `i`；
- 找到一个合法切分后即可 `break`；
- 单词可以重复使用，不需要从字典中删除单词。

时间复杂度通常记为 `O(n²)`（暂不展开字符串切片成本）。

空间复杂度：`O(n + m)`，其中 `n` 是字符串长度，`m` 是字典存储规模。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

判断字符串能否由字典中的单词拼接而成，单词可重复使用。

### 官方示例

#### 示例 1

```text
s = "leetcode"
wordDict = ["leet","code"]
输出 = true
```

#### 示例 2

```text
s = "applepenapple"
wordDict = ["apple","pen"]
输出 = true
```

#### 示例 3

```text
s = "catsandog"
wordDict = ["cats","dog","sand","and","cat"]
输出 = false
```

### 约束与训练提示

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s 和 wordDict[i] 仅由小写英文字母组成
- wordDict 中的所有字符串 互不相同
- 状态可表示前 i 个字符是否可被拆分。
- 需枚举最后一个单词的开始位置。

### 本题测试

```bash
npm run test:problem -- 139
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-29
- 结果：独立完成并通过
- 用时：
- 提交次数：
- 核心模型：前缀 DP，枚举最后一个单词的起点
- 核心不变量：`dp[i]` 表示前 `i` 个字符是否可拆分
- 时间复杂度：O(n²)（忽略切片成本）
- 空间复杂度：O(n + m)
- 错误标签：无
- 最小反例：`s = "a"`、`wordDict = ["a"]`，依赖 `dp[0] = true`
- D+1：
- D+3：
- D+7：
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
