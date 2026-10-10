<!-- top150-meta:start -->
> Top Interview 150 · 数组 / 字符串 · 简单 · 提示后通过
> [58. 最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/) · 标签：字符串
<!-- top150-meta:end -->

# [58. 最后一个单词的长度](https://leetcode.cn/problems/length-of-last-word/)

## 解题思路

从字符串末尾向前扫描。因为要求的是最后一个单词，所以没有必要从头处理前面的内容。

当前写法使用 `result` 收集最后一个单词：

```js
var lengthOfLastWord = function (s) {
  let result = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (result !== '' && s[i] === ' ') {
      return result.length
    } else if (s[i] === ' ') {
      continue
    } else {
      result += s[i]
    }
  }

  return result.length
}
```

扫描过程分为三个阶段：

1. 还没有遇到字母时，跳过字符串末尾的空格。
2. 遇到字母后，将字符加入 `result`。
3. 已经收集到字母后再次遇到空格，说明最后一个单词结束，返回它的长度。

由于从后向前收集，`result` 中的单词是倒序的。例如 `World` 会被收集成 `dlroW`，但字符数量不变，所以不影响答案。

循环结束后仍然要返回 `result.length`。这是为了处理最后一个单词一直延伸到字符串开头的情况，例如 `"Hello"` 和 `"a "`。

### 优化写法

题目只需要长度，不需要保存单词，可以直接使用计数器：

```js
var lengthOfLastWord = function (s) {
  let length = 0

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (length > 0) {
        break
      }
    } else {
      length++
    }
  }

  return length
}
```

当前写法和计数器写法都只需要扫描到最后一个单词结束；计数器写法不创建额外字符串，空间更好。

## 边界条件

- 字符串末尾可能有多个空格，需要先跳过。
- 字符串中间可能有多个连续空格，不影响最后一个单词。
- 最后一个单词可能从下标 `0` 开始，循环结束后必须返回结果。
- 单字符单词的长度为 `1`。

<!-- top150-training:start -->
## 面试 150 训练复盘

- 训练日期：2026-09-20
- 结果：提示后通过
- 用时：
- 提交次数：
- 核心模型：从字符串末尾反向扫描，跳过尾部空格后统计最后一个单词
- 核心不变量：`result` 始终只保存已经扫描到的最后一个单词字符
- 时间复杂度：`O(n)`
- 空间复杂度：当前写法为 `O(k)`，`k` 是最后一个单词长度；计数器写法为 `O(1)`
- 错误标签：返回值 / 循环结束条件
- 最小反例：`"Hello"`、`"a "`、`"Hello World"`
<!-- top150-training:end -->
