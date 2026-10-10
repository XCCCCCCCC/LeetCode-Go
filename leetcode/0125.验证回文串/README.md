<!-- top150-meta:start -->
> Top Interview 150 · 双指针 · 简单 · 提示后通过
> [125. 验证回文串](https://leetcode.cn/problems/valid-palindrome/) · 标签：双指针 / 字符串
<!-- top150-meta:end -->

# [125. 验证回文串](https://leetcode.cn/problems/valid-palindrome/)

## 解题思路

题目判断的是忽略大小写和非字母数字字符之后，字符串是否正着读和反着读都相同。

先统一处理字符串：

```js
const formattedS = s
  .replace(/[^0-9a-zA-Z]/g, '')
  .toLowerCase()
```

正则 `/[^0-9a-zA-Z]/g` 会匹配所有非数字、非英文字母的字符，再用空字符串将它们删除。

处理完成后，使用左右指针：

- `left` 从字符串开头向右移动。
- `right` 从清洗后字符串末尾向左移动。
- 两个位置的字符不同，立即返回 `false`。
- 指针相遇前始终相同，返回 `true`。

```js
var isPalindrome = function (s) {
  const formattedS = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
  let left = 0
  let right = formattedS.length - 1

  while (left < right) {
    if (formattedS[left] !== formattedS[right]) {
      return false
    }
    left++
    right--
  }

  return true
}
```

核心不变量：每轮比较前，`left` 左侧和 `right` 右侧已经完成匹配；当前只需要检查尚未确定的中间部分。

## 边界条件

- 右指针必须使用 `formattedS.length - 1`，因为删除特殊字符后字符串长度可能改变。
- 清洗后为空字符串时，左右指针不会进入循环，应返回 `true`。
- 单字符字符串天然是回文串。
- 数字也要参与比较，不能在清洗时删除。

<!-- top150-training:start -->
## 面试 150 训练复盘

- 训练日期：2026-09-20
- 结果：提示后通过
- 用时：
- 提交次数：
- 核心模型：字符串清洗 + 左右双指针
- 核心不变量：`left` 左侧与 `right` 右侧的字符已经全部对称匹配
- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`，清洗字符串会创建新字符串
- 错误标签：下标范围 / 数据源混用
- 最小反例：`"A man, a plan, a canal: Panama"`、`" "`、`"0P"`
<!-- top150-training:end -->
