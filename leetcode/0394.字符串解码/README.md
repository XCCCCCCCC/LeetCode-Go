<!-- hot100-meta:start -->
> Hot 100 · 栈 · 中等 · 已有代码与测试
> [394. 字符串解码](https://leetcode.cn/problems/decode-string/) · 标签：栈 / 递归 / 字符串
<!-- hot100-meta:end -->

# [394. 字符串解码](https://leetcode.cn/problems/decode-string/)

## 解题思路

### 1. 这道题的本质：保存和恢复现场

编码字符串可以不断嵌套，例如：

```text
3[a2[c]]
```

处理外层 `3[...]` 时，必须先进入内层 `2[c]`。但是进入内层以后，外层的重复次数和已经拼好的字符串不能丢失。

因此遇到 `[` 时，要把外层现场保存起来；遇到 `]` 时，再把当前层处理结果合并回外层。

```text
遇到 [：保存外层现场，进入新层
遇到 ]：当前层完成，恢复外层现场
```

这就是栈在本题中的作用。

### 2. 四种字符分别怎么处理

#### 数字

数字可能是多位数，例如 `12[a]`。读取数字时要进行十进制累加：

```js
currentNum = currentNum * 10 + Number(char)
```

读取 `1` 和 `2` 的过程：

```text
0 → 1
1 → 12
```

#### 左括号 `[`

左括号表示进入新的嵌套层。此时保存两份外层现场：

```js
numStack.push(currentNum)
strStack.push(currentString)
```

然后清空当前层的变量：

```js
currentNum = 0
currentString = ''
```

#### 右括号 `]`

右括号表示当前层结束。取出外层现场，并把当前层字符串重复后拼回去：

```js
const count = numStack.pop()
const previousString = strStack.pop()

currentString = previousString + currentString.repeat(count)
```

#### 普通字母

字母属于当前层，直接追加：

```js
currentString += char
```

### 3. 两个栈的语义容易产生错觉

本题使用两个同步栈：

```js
const numStack = []
const strStack = []
```

它们在同一个嵌套层级一起入栈、一起出栈，但保存的内容并不是同一种东西。

`numStack` 保存：

```text
当前这一层的重复次数
```

`strStack` 保存：

```text
进入当前括号层之前，外层已经构建好的字符串
```

真正要重复的内容并没有提前放进 `strStack`，而是一直保存在当前变量 `currentString` 中，等遇到 `]` 时才完成重复。

因此在遇到 `]` 时，三个状态的关系是：

```text
numStack 栈顶：当前层重复次数
strStack 栈顶：进入当前层前的外层字符串
currentString：当前层真正要重复的内容
```

可以把 `strStack` 理解成 `previousStringStack`，这样语义更直观。

### 4. 用 `abc3[cd]` 理解一层嵌套

读取 `abc` 后：

```text
currentString = "abc"
```

读取 `3` 后：

```text
currentNum = 3
```

遇到 `[`，保存外层现场：

```text
numStack = [3]
strStack = ["abc"]
```

然后重置当前层：

```text
currentNum = 0
currentString = ""
```

读取 `cd` 后：

```text
currentString = "cd"
```

遇到 `]`，弹出现场并合并：

```text
currentString = "abc" + "cd".repeat(3)
              = "abccdcdcd"
```

### 5. 用 `3[a2[c]]` 理解多层嵌套

进入外层 `3[`：

```text
numStack = [3]
strStack = [""]
```

读取 `a` 后进入内层 `2[`：

```text
numStack = [3, 2]
strStack = ["", "a"]
```

这里的配对关系是同一个层级的元素对应：

```text
numStack[0] = 3  ↔ strStack[0] = ""
numStack[1] = 2  ↔ strStack[1] = "a"
```

处理内层 `c` 和 `]`：

```text
currentString = "a" + "c".repeat(2)
              = "acc"
```

此时回到外层，再处理外层 `]`：

```text
currentString = "" + "acc".repeat(3)
              = "accaccacc"
```

这不是“数字栈和字符串栈交叉配对”，而是两个栈按照相同的嵌套深度同步进出栈；当前层的字符串则暂时留在 `currentString` 中。

### 6. 当前实现

```js
var decodeString = function (s) {
  let currentNum = 0
  let currentString = ''
  const numStack = []
  const strStack = []

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      currentNum = currentNum * 10 + Number(char)
    } else if (char === '[') {
      numStack.push(currentNum)
      strStack.push(currentString)
      currentNum = 0
      currentString = ''
    } else if (char === ']') {
      const count = numStack.pop()
      const previousString = strStack.pop()
      currentString = previousString + currentString.repeat(count)
    } else {
      currentString += char
    }
  }

  return currentString
}
```

## 核心不变量

遍历过程中始终保持：

```text
currentNum：当前层正在读取的重复次数
currentString：当前层已经解析出的字符串
numStack：每一层保存的重复次数
strStack：每一层进入前保存的外层字符串
```

每次遇到 `[`，两个栈的长度都会增加 1；每次遇到 `]`，两个栈的长度都会减少 1。因此两个栈的长度始终相等，并且同一个下标表示同一个嵌套层级。

## 边界条件

- 多位数字：使用 `currentNum = currentNum * 10 + digit`；
- 外层没有前缀字符串：`strStack` 仍然要压入空字符串；
- 普通字母出现在括号外：直接追加到 `currentString`；
- 多层嵌套：内层先完成，再逐层恢复外层；
- 遇到 `]` 时，先弹出外层状态，再更新 `currentString`。

时间复杂度与解码后字符串长度有关，至少需要 `O(n)` 时间构建结果；辅助栈空间为 `O(d)`，其中 `d` 是最大嵌套深度。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

将包含“重复次数[子串]”结构的编码字符串还原。

### 官方示例

#### 示例 1

```text
s = "3[a]2[bc]"
输出 = "aaabcbc"
```

#### 示例 2

```text
s = "3[a2[c]]"
输出 = "accaccacc"
```

#### 示例 3

```text
s = "2[abc]3[cd]ef"
输出 = "abcabccdcdcdef"
```

#### 示例 4

```text
s = "abc3[cd]xyz"
输出 = "abccdcdcdxyz"
```

### 约束与训练提示

- 1 <= s.length <= 30
- s 由小写英文字母、数字和方括号 '[]' 组成
- s 保证是一个 有效 的输入。
- s 中所有整数的取值范围为 [1, 300]
- 编码可以多层嵌套。
- 重复次数可以由多位数字组成。

### 本题测试

```bash
npm run test:problem -- 394
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-20
- 结果：提示后完成并通过
- 用时：
- 提交次数：
- 核心模型：入括号保存外层现场，出括号恢复外层并合并当前层
- 核心不变量：两个栈长度相同，同一下标表示同一嵌套层级；当前层结果暂存在 `currentString`
- 时间复杂度：与解码后字符串长度相关，至少为 O(n)
- 空间复杂度：辅助栈 O(d)，结果字符串空间不计入辅助空间时为 O(d)
- 错误标签：状态含义 / 嵌套恢复
- 最小反例：`abc3[cd]`，区分 `strStack` 保存外层前缀与 `currentString` 保存待重复内容
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
