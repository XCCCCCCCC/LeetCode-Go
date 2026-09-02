<!-- hot100-meta:start -->
> Hot 100 · 动态规划 · 中等 · 提示后通过
> [152. 乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/) · 标签：数组 / 动态规划
<!-- hot100-meta:end -->

# [152. 乘积最大子数组](https://leetcode.cn/problems/maximum-product-subarray/)

## 解题思路

### 1. 题目中的“子数组”

本题要求的是**连续子数组**，不能跳过元素。状态设计为“以当前位置结尾”，就能保证连续性。

例如 `[2, 3, -2, 4]` 中，`[3, -2]` 是子数组，`[2, -2]` 不是子数组。

### 2. 为什么不能只记录最大乘积

乘法遇到负数时，最大值和最小值可能互换：

```text
最小值 -6 × 当前负数 -4 = 24
```

因此每个位置同时保存两个状态：

- `maxEnd`：必须以当前位置结尾的连续子数组中的最大乘积。
- `minEnd`：必须以当前位置结尾的连续子数组中的最小乘积。

`maxEnd` 不是从数组开头一直乘到当前位置，而是所有以当前位置结尾的连续子数组中的最大值；必要时可以从当前位置重新开始。

### 3. 当前元素的三种来源

设当前元素为 `cur = nums[i]`，以它结尾的连续子数组只有三种可能：

1. 只从当前元素开始：`cur`
2. 接在上一个位置的最大乘积后面：`prevMax * cur`
3. 接在上一个位置的最小乘积后面：`prevMin * cur`

因此：

```js
maxEnd = Math.max(cur, prevMax * cur, prevMin * cur)
minEnd = Math.min(cur, prevMax * cur, prevMin * cur)
```

更新前必须先保存上一轮的最大值和最小值，避免新值覆盖旧值。

### 4. 代码

```js
var maxProduct = function (nums) {
  let result = nums[0]
  let maxEnd = nums[0]
  let minEnd = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i]
    const prevMax = maxEnd
    const prevMin = minEnd

    maxEnd = Math.max(cur, prevMax * cur, prevMin * cur)
    minEnd = Math.min(cur, prevMax * cur, prevMin * cur)
    result = Math.max(result, maxEnd)
  }

  return result
}
```

### 5. 示例理解

以 `[2, 3, -2, 4]` 为例：

```text
初始：maxEnd = 2，minEnd = 2，result = 2
遇到 3：候选为 3、6、6，maxEnd = 6，minEnd = 3
遇到 -2：候选为 -2、-12、-6，maxEnd = -2，minEnd = -12
遇到 4：候选为 4、-8、-48，maxEnd = 4，result 仍为 6
```

遇到 `0` 时，延续乘积都会变成 `0`；后续又可以通过候选值 `cur` 重新开始，因此不需要额外处理 `0`。

### 6. 和 53. 最大子数组和的区别

53 题是加法，负数前缀通常只会让和变小，可以舍弃；152 题是乘法，负数乘负数可能变成正数，所以必须同时保留最大和最小状态。

## 边界条件

- 数组非空，可以用 `nums[0]` 初始化。
- 不能把 `result` 初始化为 `0`，否则 `[-2]` 会错误返回 `0`。
- 全是负数时，两个负数相乘可能得到正数，例如 `[-2, -3]` 的答案是 `6`。
- 当前元素本身必须作为候选值，否则无法正确处理重新开始的情况。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

求乘积最大的非空连续子数组。

### 官方示例

#### 示例 1

```text
nums = [2,3,-2,4]
输出 = 6
```

#### 示例 2

```text
nums = [-2,0,-1]
输出 = 0
```

### 约束与训练提示

- 1 <= nums.length <= 2 * 10^4
- -10 <= nums[i] <= 10
- nums 的任何子数组的乘积都 保证 是一个 32-位 整数
- 负数会让最大与最小乘积互换角色。
- 每个位置需同时维护最大和最小结尾乘积。

### 本题测试

```bash
npm run test:problem -- 152
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：提示后通过
- 用时：
- 提交次数：
- 核心模型：以当前位置结尾的最大/最小乘积 DP
- 核心不变量：`maxEnd` 和 `minEnd` 始终表示以当前下标结尾的连续子数组的最大、最小乘积
- 时间复杂度：`O(n)`
- 空间复杂度：`O(1)`
- 错误标签：模型识别 / 不变量 / 边界条件 / 实现错误 / 复杂度 / 调试低效
- 最小反例：`[-2]`、`[-2, -3]`、`[2, 3, -2, 4]`、`[-2, 0, -1]`
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
