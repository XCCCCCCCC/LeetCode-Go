<!-- top150-meta:start -->
> Top Interview 150 · 二分查找 · 中等 · 已有代码
> [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) · 标签：数组 / 二分查找
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 中等 · 已有代码与测试
> [34. 在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/) · 标签：数组 / 二分查找
<!-- hot100-meta:end -->

# [在排序数组中查找元素的第一个和最后一个位置](https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/)

给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回  [-1, -1]。

你必须设计并实现时间复杂度为  O(log n)  的算法解决此问题。

示例 1：

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

示例 1：

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

示例 1：

```
输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
```

## 解题思路

**思路 1**：二分法，两次分别找出第一个与最后一个 target 的位置。func1 展示了二分法的两种模板，适用于两种查找方式。

### 普通二分和边界二分的区别

普通二分找到 `target` 后可以立即返回：

```js
if (nums[mid] === target) {
  return mid
}
```

但 34 题不能立即返回，因为 `mid` 可能只是重复元素中间的某一个位置。

例如：

```text
nums = [5,7,7,8,8,10]
target = 8
```

找到下标 `3` 或 `4` 都说明 target 存在，但题目需要同时得到：

```text
左边界 = 3
右边界 = 4
```

所以需要做两次方向不同的二分。

### `func3` 当前的问题

当前循环使用：

```js
if (nums[mid] < target) {
  left = mid + 1
} else {
  right = mid - 1
}
```

它的方向是在寻找第一个大于等于 `target` 的位置，也就是左边界方向，并没有同时寻找右边界。

同时检查：

```js
nums[left]
nums[right]
```

不能稳定得到答案，因为 `left` 和 `right` 只是当前尚未排除区间的端点，不代表它们已经被确认是 target 的边界。

另外：

```js
result[0] = -1
```

但更新条件是：

```js
result[0] >= left
```

由于 `left >= 0`，`-1 >= left` 永远为 false，所以左边界永远不会被写入。

即使修正这个条件，一次循环也只有一个区间，无法同时按照“继续向左”和“继续向右”两个相反方向收缩。最清楚的方案仍然是两次二分。

### `func3` 第二版：方向正确，但读取边界的时机不对

第二版已经拆成两次二分，两个收缩方向是正确的。

第一段：

```js
if (nums[mid] < target) {
  left = mid + 1
} else {
  right = mid - 1
}
```

循环结束后：

```text
left 是第一个大于等于 target 的位置
```

第二段：

```js
if (nums[mid] > target) {
  right = mid - 1
} else {
  left = mid + 1
}
```

循环结束后：

```text
right 是最后一个小于等于 target 的位置
```

当前错误在于循环内部检查：

```js
nums[left] === target
nums[right] === target
```

有时一次区间更新刚好让 `left` 或 `right` 到达答案，但更新后马上出现 `left > right`，循环结束，没有机会进入下一轮检查。

例如：

```text
nums = [1,2,3]
target = 2
```

第一轮中 `mid = 1`，因为 `nums[mid] >= target`，执行：

```js
right = 0
```

第二轮将 `left` 更新为 `1` 后循环结束。此时 `left = 1` 正是答案，但代码没有在循环外检查它。

因此边界应该在循环完整结束后读取，而不是循环中观察。

### 使用循环结束后的 `left` 和 `right`

```js
const searchRange_func3 = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  const first = left

  if (first === nums.length || nums[first] !== target) {
    return [-1, -1]
  }

  left = 0
  right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] <= target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return [first, right]
}
```

找到左边界后先验证：

```js
nums[first] === target
```

如果不相等，说明目标不存在，直接返回 `[-1, -1]`。目标存在时，第二段结束后的 `right` 就是最后一个 target 的位置。

### 第一次二分：寻找左边界

规则是：

```text
nums[mid] < target：目标在右边，left = mid + 1
nums[mid] >= target：mid 可能是左边界，继续向左，right = mid - 1
```

即使 `nums[mid] === target`，也不能停止，因为左边可能还有相同元素。

```js
function findFirst() {
  let left = 0
  let right = nums.length - 1
  let answer = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        answer = mid
      }
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return answer
}
```

### 第二次二分：寻找右边界

规则与左边界相反：

```text
nums[mid] <= target：mid 可能是右边界，继续向右，left = mid + 1
nums[mid] > target：目标在左边，right = mid - 1
```

```js
function findLast() {
  let left = 0
  let right = nums.length - 1
  let answer = -1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        answer = mid
      }
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return answer
}
```

最终：

```js
return [findFirst(), findLast()]
```

### 为什么需要 `answer`

当 `nums[mid] === target` 时，已经找到一个合法位置，所以先记录：

```js
answer = mid
```

然后继续搜索更靠左或更靠右的位置。如果后续没有找到另一个 target，之前记录的 `answer` 仍然有效。

也可以使用“寻找第一个大于等于 target 的位置”和“寻找第一个大于 target 的位置”来统一模板，但第一遍使用两个明确函数更容易理解。

### 机考记忆

```text
找左边界：等于 target 时也向左收缩
找右边界：等于 target 时也向右收缩
```

两次二分的复杂度仍然是：

```text
O(log n) + O(log n) = O(log n)
```

空间复杂度为 `O(1)`。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

在非递减数组中找出目标值第一次和最后一次出现的下标。

### 官方示例

#### 示例 1

```text
nums = [5,7,7,8,8,10]
target = 8
输出 = [3,4]
```

#### 示例 2

```text
nums = [5,7,7,8,8,10]
target = 6
输出 = [-1,-1]
```

#### 示例 3

```text
nums = []
target = 0
输出 = [-1,-1]
```

### 约束与训练提示

- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- nums 是一个非递减数组
- -10^9 <= target <= 10^9
- 目标不存在时返回 [-1,-1]。
- 需分别查找左边界和右边界。

### 本题测试

```bash
npm run test:problem -- 34
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-17
- 结果：独立完成两次边界收缩，读取边界的时机仍需调整
- 用时：
- 提交次数：
- 核心模型：分别二分寻找第一个 target 和最后一个 target
- 核心不变量：左边界搜索保留更左的可能位置，右边界搜索保留更右的可能位置
- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 错误标签：边界方向 / 循环结束状态 / 读取时机
- 最小反例：`[1,2,3]`、target=2，第二版返回 `[-1,-1]`
- D+1：2026-08-18，改为在循环结束后读取第一段 `left` 和第二段 `right`
- D+3：2026-08-20，口述等于 target 时两个函数为什么继续向不同方向
- D+7：2026-08-24，尝试用统一 lowerBound 模板重写
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
