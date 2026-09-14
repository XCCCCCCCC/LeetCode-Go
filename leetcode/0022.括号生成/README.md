<!-- top150-meta:start -->
> Top Interview 150 · 回溯 · 中等 · 已有代码
> [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/) · 标签：字符串 / 动态规划 / 回溯 / 括号序列
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 已有代码与测试
> [22. 括号生成](https://leetcode.cn/problems/generate-parentheses/) · 标签：字符串 / 动态规划 / 回溯 / 括号序列
<!-- hot100-meta:end -->

# [括号生成](https://leetcode.cn/problems/generate-parentheses/)

数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例1：
```
输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
```

示例2：
```
输入：n = 1
输出：["()"]
```

## 解题思路

## `func2` 内存溢出的原因

当前 `func2` 的回溯终止条件是：

```js
if (temp.length === n * 2 && check(temp)) {
  result.push(temp.join(''))
  return
}
```

这个条件只在下面两个条件同时成立时才会返回：

```text
长度刚好等于 2n；
check(temp) 返回 true。
```

如果长度已经达到 `2n`，但当前括号不合法，函数不会返回，而是继续执行下面的循环并继续添加括号：

```text
2n → 2n+1 → 2n+2 → ……
```

一旦长度超过 `2n`，就再也不可能满足：

```js
temp.length === n * 2
```

递归便无法结束，不断创建新的调用和数组内容，最终出现调用栈或内存溢出。

即使采用“全部生成后过滤”的思路，长度边界也必须单独返回：

```js
if (temp.length === n * 2) {
  if (check(temp)) {
    result.push(temp.join(''))
  }
  return
}
```

关键区别是：

```text
长度达到 2n 后，无论是否合法，都不能继续向下生成。
```

### `check` 的循环变量写错了

当前代码：

```js
for (let i = 0; i < arr.length; arr++) {
```

循环末尾增加的是 `arr`，而不是 `i`。应该是：

```js
for (let i = 0; i < arr.length; i++) {
```

当前写法会把数组执行 `arr++`，数组被转换成数字后变成异常值，循环不能正常遍历所有括号。

### 最终左右数量相等还不够

即使修正循环，只检查最终：

```js
return sign === 0
```

仍然不能判断括号一定合法。例如：

```text
")("：左右括号数量相等，但顺序不合法
```

遍历过程中，只要右括号数量超过左括号数量，也就是 `sign < 0`，就应立即返回 `false`：

```js
function check(arr) {
  let balance = 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      balance++
    } else {
      balance--
    }

    if (balance < 0) {
      return false
    }
  }

  return balance === 0
}
```

### `rule` 中放入 n 份括号会产生重复分支

当 `n = 2` 时：

```js
rule = ['(', ')', '(', ')']
```

循环会把下标 `0` 的 `(` 和下标 `2` 的 `(` 当成两个选择，但它们产生的字符串完全一样。并且当前代码没有标记 `rule` 中的元素是否使用过，所以同一个位置还能无限重复选择。

如果只是暴力生成字符串，每一层其实只有两种选择：

```text
'('
')'
```

不过本题更推荐直接在生成过程中排除非法选择。

## 推荐模型：只生成合法括号

不要把题目理解成“从 `n` 个左括号和 `n` 个右括号中排列”，而要理解成：

> 当前路径的下一个位置，可以放左括号还是右括号？

使用两个计数：

```text
left：当前已经使用多少个左括号
right：当前已经使用多少个右括号
```

选择规则只有两条：

```text
left < n：左括号还没用满，可以添加 '('
right < left：已有足够左括号可以配对，才能添加 ')'
```

第二条规则保证任何前缀中，右括号都不会超过左括号。

### 为什么是 `right < left`

假设当前：

```text
left = 2
right = 1
path = "(()"
```

还有一个没有配对的左括号，所以可以添加右括号。

如果：

```text
left = 2
right = 2
path = "()()"
```

当前所有左括号都已经配对，不能再添加右括号，否则会出现：

```text
"()())"
```

它的最后一个右括号找不到对应的左括号。

所以添加右括号的条件是：

```js
if (right < left)
```

## 推荐写法

```js
function generateParenthesis_func2(n) {
  const result = []
  const path = []

  function backTrack(left, right) {
    if (path.length === n * 2) {
      result.push(path.join(''))
      return
    }

    if (left < n) {
      path.push('(')
      backTrack(left + 1, right)
      path.pop()
    }

    if (right < left) {
      path.push(')')
      backTrack(left, right + 1)
      path.pop()
    }
  }

  backTrack(0, 0)
  return result
}
```

### 五个回溯问题

```text
path：当前正在生成的括号字符串
choice：当前可以选择 '(' 或 ')'
invalid：左括号已用满时不能加 '('；right === left 时不能加 ')'
finish：path.length === 2n
restore：添加一个括号后，递归返回时 pop
```

这里没有 `for` 循环，因为当前只有两种固定选择，而且两种选择拥有不同的合法条件。分别写两个 `if` 更直观。

## 用 `n = 2` 跟踪流程

初始：

```text
path = ""
left = 0
right = 0
```

此时只能加左括号，因为 `right < left` 不成立：

```text
"("，left = 1，right = 0
```

接下来有两种合法选择：

```text
继续加 '(' → "(("
添加 ')'   → "()"
```

沿第一条路：

```text
"((" → "(()" → "(())"
```

沿第二条路：

```text
"()" → "()(" → "()()"
```

最终结果：

```text
["(())", "()()"]
```

像 `")("`、`"())("` 这样的路径从一开始就不会生成，因此不需要最后再过滤。

## 边界应该怎样想到

不要先问“递归什么时候 return”，先问一个合法答案必须满足什么：

```text
总长度必须是 2n；
左括号最多使用 n 个；
任意时刻右括号不能多于左括号。
```

这三个条件直接翻译成代码：

```js
path.length === 2 * n // 完整答案
left < n              // 可以继续加左括号
right < left          // 可以继续加右括号
```

这就是本题全部边界。

## 和前几道回溯题对比

| 题目 | 递归状态 | 选择范围 | 完成条件 |
|---|---|---|---|
| 46 全排列 | `path + used` | 所有未使用数字 | `path.length === n` |
| 78 子集 | `path + start` | start 右侧数字 | 每层都保存 |
| 17 电话字母 | `path + index` | 当前数字对应字母 | `index === digits.length` |
| 39 组合总和 | `path + rest + start` | start 右侧，可重复当前数字 | `rest === 0` |
| 22 括号生成 | `path + left + right` | 满足计数条件的括号 | `path.length === 2n` |

22 的特点是：

> 不遍历一个现成的候选数组，而是根据当前状态判断两种选择是否合法。

## 复杂度

合法结果数量是第 `n` 个卡特兰数。机考阶段不需要推导公式，只需要知道结果数量会快速增长。

```text
时间复杂度：O(Cn × n)，Cn 表示第 n 个卡特兰数
结果空间：O(Cn × n)
额外空间：O(n)
```

递归最多生成长度为 `2n` 的路径，所以额外递归与路径空间为 `O(n)`。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

生成由 n 对括号组成的所有合法字符串。

### 官方示例

#### 示例 1

```text
n = 3
输出 = ["((()))","(()())","(())()","()(())","()()()"]
```

#### 示例 2

```text
n = 1
输出 = ["()"]
```

### 约束与训练提示

- 1 <= n <= 8
- 任意前缀中右括号数不能超过左括号数。
- 左右括号最终都必须使用 n 个。

### 本题测试

```bash
npm run test:problem -- 22
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-14
- 结果：独立尝试 `func2`，因终止条件和校验循环错误导致无限递归
- 用时：
- 提交次数：
- 核心模型：根据 `left`、`right` 计数，只生成合法括号前缀
- 核心不变量：任何时刻 `0 <= right <= left <= n`
- 时间复杂度：O(Cn×n)
- 空间复杂度：额外 O(n)，结果 O(Cn×n)
- 错误标签：终止条件 / 无限递归 / 循环变量 / 合法前缀 / 状态设计
- 最小反例：`n=1`；长度达到 2 但校验失败时也必须返回，不能继续增长
- D+1：2026-08-15，使用 `left/right` 重写并解释 `right < left`
- D+3：2026-08-17，手动画出 `n=2` 只生成 `(())`、`()()` 的过程
- D+7：2026-08-21，闭卷写出两个 `if` 分支版本
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
