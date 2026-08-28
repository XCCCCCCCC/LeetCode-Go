<!-- hot100-meta:start -->
> Hot 100 · 栈 · 中等 · 已有代码，测试入口待同步
> [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/) · 标签：栈 / 数组 / 单调栈
<!-- hot100-meta:end -->

# [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)

## 解题思路

### 1. func1：暴力解法

`func1` 的思路是：站在第 `i` 天，向右寻找第一个比今天更高的温度。

```js
for (let i = 0; i < temperatures.length; i++) {
  for (let j = i + 1; j < temperatures.length; j++) {
    if (temperatures[j] > temperatures[i]) {
      result[i] = j - i
      break
    }
  }
}
```

这个思路是正确的，但最坏情况下每一天都要向后扫描，时间复杂度为 `O(n²)`。题目长度最多为 `10^5`，因此需要进一步优化。

### 2. func2：从“主动查找”改成“等待被解决”

暴力解法是：

```text
站在今天，向未来寻找更高温度。
```

单调栈换了一个角度：

```text
今天到来时，去解决之前还没有找到更高温度的日期。
```

例如：

```text
temperatures = [73, 75, 71, 72]
```

处理 73 时，它还没有答案，先记录下来；处理 75 时，发现 75 比 73 高，于是直接解决第 0 天的问题。

### 3. 栈中保存什么

栈中保存的是：

```text
还没有找到更高温度的日期下标
```

保存下标而不是温度，是因为最后需要计算等待天数：

```js
今天下标 - 之前日期下标
```

例如当前日期是 `i = 5`，被解决的日期是 `previousIndex = 3`：

```js
result[3] = 5 - 3 // 2 天
```

### 4. 栈为什么是单调栈

栈中下标对应的温度从栈底到栈顶保持递减或相等：

```text
栈底 → 栈顶
75, 71, 69
```

当新温度到来时：

- 如果新温度不高于栈顶温度，它暂时无法解决栈顶，直接入栈；
- 如果新温度高于栈顶温度，它可以解决栈顶，弹出并计算答案；
- 弹出后继续检查新的栈顶，因为今天可能连续解决多个之前的日期。

因此这里必须使用 `while`，不能只使用一次 `if`。

### 5. 按代码逐步理解

当前核心代码：

```js
for (let i = 0; i < temperatures.length; i++) {
  while (
    stack.length &&
    temperatures[stack[stack.length - 1]] < temperatures[i]
  ) {
    const previousIndex = stack.pop()
    result[previousIndex] = i - previousIndex
  }

  stack.push(i)
}
```

每一轮分成两步：

#### 第一步：今天解决之前的问题

```js
while (
  stack.length &&
  temperatures[stack[stack.length - 1]] < temperatures[i]
)
```

这里比较的是：

```text
今天的温度 > 栈顶日期的温度
```

如果成立，栈顶日期找到了它右侧第一个更高温度的日期，就是今天。

```js
const previousIndex = stack.pop()
result[previousIndex] = i - previousIndex
```

#### 第二步：今天自己加入待解决清单

```js
stack.push(i)
```

今天虽然可能解决了前面的日期，但今天自己还没有看到未来，所以也要等待后面的温度。

这一步不能漏掉。

### 6. 用 `[73,75,71,72]` 走一遍

| 当前日期 | 当前温度 | 栈中下标 | 栈中温度 | 操作 | 结果变化 |
|---:|---:|---|---|---|---|
| 0 | 73 | `[]` | `[]` | 0 入栈 | `[0,0,0,0]` |
| 1 | 75 | `[0]` | `[73]` | 75 解决 73，1 入栈 | `[1,0,0,0]` |
| 2 | 71 | `[1]` | `[75]` | 71 暂时不能解决 75，2 入栈 | `[1,0,0,0]` |
| 3 | 72 | `[1,2]` | `[75,71]` | 72 解决 71，3 入栈 | `[1,0,1,0]` |

最后栈中剩下的下标，说明它们后面没有更高温度，结果保持默认值 `0`。

### 7. 相等温度为什么不弹出

题目要求的是“更高温度”，所以判断必须是：

```js
temperatures[stackTop] < temperatures[i]
```

不是：

```js
temperatures[stackTop] <= temperatures[i]
```

相同温度不能解决前一天的问题，两个相同温度的日期都要保留在栈中。

## 核心不变量

遍历到第 `i` 天时：

1. `stack` 中保存所有 `0...i-1` 天中尚未找到更高温度的下标；
2. 栈中下标对应的温度从底到顶保持递减或相等；
3. `result[index]` 一旦被填写，就已经找到了该日期右侧第一个更高温度；
4. 当前日期 `i` 处理完前面的日期后，必须入栈等待未来。

## 推荐写法

```js
var dailyTemperatures_func2 = function (temperatures) {
  const result = new Array(temperatures.length).fill(0)
  const stack = []

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      const previousIndex = stack.pop()
      result[previousIndex] = i - previousIndex
    }

    stack.push(i)
  }

  return result
}
```

你当前代码中的 `tail` 写法可以工作，但不是必须的：弹出后直接通过 `stack[stack.length - 1]` 获取新的栈顶更清晰。

时间复杂度为 `O(n)`：每个下标最多入栈一次、出栈一次。

空间复杂度为 `O(n)`：结果数组和单调栈都可能保存 `n` 个元素。

## 边界条件

- 空数组：返回空数组；
- 只有一天：没有未来日期，返回 `[0]`；
- 全部递减：所有日期都找不到更高温度，结果全为 `0`；
- 全部递增：每个日期会被下一天解决；
- 相等温度：相等不算更高，不能弹出栈顶；
- 最后栈中剩余的日期：后面没有更高温度，保持默认值 `0`。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

对每一天的温度，计算要等多少天才会遇到更高温度。

### 官方示例

#### 示例 1

```text
temperatures = [73,74,75,71,69,72,76,73]
输出 = [1,1,4,2,1,1,0,0]
```

#### 示例 2

```text
temperatures = [30,40,50,60]
输出 = [1,1,1,0]
```

#### 示例 3

```text
temperatures = [30,60,90]
输出 = [1,1,0]
```

### 约束与训练提示

- 1 <= temperatures.length <= 10^5
- 30 <= temperatures[i] <= 100
- 之后不会出现更高温度时答案为零。
- 单调栈中保存尚未找到更高温度的下标。

### 本题测试

```bash
npm run test:problem -- 739
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-20
- 结果：提示后独立写出单调栈版本，核心逻辑已正确
- 用时：
- 提交次数：
- 核心模型：栈保存尚未找到更高温度的日期下标，新温度到来时解决栈顶问题
- 核心不变量：栈中温度从底到顶递减或相等，当前日期处理完后必须入栈
- 时间复杂度：O(n)
- 空间复杂度：O(n)
- 错误标签：单调栈模型 / 下标与温度的对应
- 最小反例：`[73,74,75]`，弹出 73 后必须把 74 的下标继续入栈
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
