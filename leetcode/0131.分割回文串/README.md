<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 未开始
> [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/) · 标签：字符串 / 动态规划 / 回溯
<!-- hot100-meta:end -->

# [131. 分割回文串](https://leetcode.cn/problems/palindrome-partitioning/)

## 解题思路

### 先明确路径到底保存什么

131 不是判断整个字符串是否为回文，而是把字符串切成若干段，并且每一段都必须是回文串。

例如 `s = "aab"` 的合法分割是：

```text
["a", "a", "b"]
["aa", "b"]
```

因此本题的 `path` 不是字符数组，而是已经切出来的子串列表：

```text
path = ["a", "aa"]
```

### 这版实现的关键变化

之前如果一进入递归就判断：

```js
if (check(temp)) {
  result.push([...temp])
  return
}
```

但 `temp` 初始是空数组，而空数组会被 `check` 判断为回文，所以第一次调用就直接保存：

```text
[[]]
```

真正的完成条件不是“当前 path 是回文”，而是：

```js
start === s.length
```

表示整个字符串已经被切完。

之前如果直接写：

```js
temp.push(s[i])
```

只选择了一个字符，而本题一次可以选择一整段子串，例如：

```text
"a"
"aa"
"aab"
```

现在改为使用：

```js
const part = s.slice(start, i + 1)
```

并判断 `part` 是否为回文。

这一步是本题最难想到的地方：回溯的“一次选择”不一定是一个元素，也可以是一段连续区间。131 的一次选择就是从 `index` 开始，决定这一段要切到哪里。

### 递归参数 `start`

```js
backTrack(start)
```

表示：

> `s` 的下标 `0` 到 `start - 1` 已经完成分割，下一段必须从 `start` 开始。

例如：

```text
start = 0：还没有切分
start = 1：第 0 个字符已经切分
start = 2：前两个字符已经切分
start = s.length：全部切完
```

本轮枚举子串终点 `i`：

```js
for (let i = start; i < s.length; i++) {
  const part = s.slice(start, i + 1)
}
```

选中 `part` 后，下一段必须从 `i + 1` 开始：

```js
backTrack(i + 1)
```

不能写成固定的 `start + 1`，因为本轮可能选了长度大于 1 的子串。

可以把两个下标分工记成：

```text
index：本轮子串的起点
i：本轮尝试的子串终点
```

因此：

```js
s.slice(index, i + 1)
```

表示从 `index` 到 `i` 的完整子串，而：

```js
backTrack(i + 1)
```

表示切完这一段后，从它后面的第一个字符继续。

### 推荐写法

```js
var partition = function (s) {
  const result = []
  const path = []

  function isPalindrome(str) {
    let left = 0
    let right = str.length - 1

    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      }
      left++
      right--
    }

    return true
  }

  function backTrack(start) {
    if (start === s.length) {
      result.push([...path])
      return
    }

    for (let i = start; i < s.length; i++) {
      const part = s.slice(start, i + 1)

      if (!isPalindrome(part)) {
        continue
      }

      path.push(part)
      backTrack(i + 1)
      path.pop()
    }
  }

  backTrack(0)
  return result
}
```

### 回溯五问

```text
path：已经切出来的回文子串列表
choice：从 start 开始，到任意 i 结束的一段子串
invalid：当前 part 不是回文
finish：start === s.length，整个字符串切完
restore：path.pop()
```

你的 `check` 双指针判断思路本身是对的。当前代码也已经正确地把判断对象改成了当前准备切下来的 `part`，而不是整个 `temp`。

## 边界条件

- 单字符：例如 `"a"` 只能得到 `[["a"]]`。
- `start === s.length`：所有字符都已经切完，此时保存 `path`。
- 选择终点 `i` 时要使用 `s.slice(start, i + 1)`，因为 `slice` 的右边界不包含。
- 当前子串不是回文时不能加入 `path`，但可以继续尝试更长的子串。
- 递归返回后必须 `path.pop()`，否则上一种切分会污染下一种切分。
- `"aab"` 可以切成 `["a","a","b"]` 或 `["aa","b"]`，但不能把 `"aab"` 整体作为回文。

### `"aab"` 的两条合法路径

```text
backTrack(0)，path = []

选择 "a"  → backTrack(1)
  选择 "a" → backTrack(2)
    选择 "b" → backTrack(3)
    保存 ["a", "a", "b"]

回到 start = 0，选择 "aa" → backTrack(2)
  选择 "b" → backTrack(3)
  保存 ["aa", "b"]
```

`"aab"` 不是回文，所以被跳过。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

将字符串分割成若干子串，返回每一段都是回文串的所有分割方案。

### 官方示例

#### 示例 1

```text
s = "aab"
输出 = [["a","a","b"],["aa","b"]]
```

#### 示例 2

```text
s = "a"
输出 = [["a"]]
```

### 约束与训练提示

- 1 <= s.length <= 16
- s 仅由小写英文字母组成
- 每一次只能向后选择分割终点。
- 可预处理回文状态以避免重复判断。

### 本题测试

```bash
npm run test:problem -- 131
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-17
- 结果：根据提示完成修正版，官方测试通过
- 用时：
- 提交次数：
- 核心模型：从 `start` 开始枚举子串，回文子串加入 path，递归从 `i+1` 继续
- 核心不变量：`path` 中每一段都是回文，并且恰好覆盖 `s[0..start-1]`
- 时间复杂度：最坏约 O(n×2^n)
- 空间复杂度：额外 O(n)，结果空间另计
- 错误标签：路径定义 / 完成条件 / 子串终点 / 回文判断对象
- 最小反例：`s="a"`，初始空 path 不能直接当作完成答案
- D+1：2026-08-18，闭卷写出 `part = s.slice(index, i + 1)` 和 `backTrack(i + 1)`
- D+3：2026-08-20，手动跟踪 `"aab"` 的两条合法分割
- D+7：2026-08-24，对比 78 的元素选择和 131 的子串选择
<!-- hot100-training:end -->
