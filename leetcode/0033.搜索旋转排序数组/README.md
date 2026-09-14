<!-- top150-meta:start -->
> Top Interview 150 · 二分查找 · 中等 · 已有代码
> [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/) · 标签：数组 / 二分查找
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 中等 · 已有代码与测试
> [33. 搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/) · 标签：数组 / 二分查找
<!-- hot100-meta:end -->

# [搜索旋转排序数组](https://leetcode.cn/problems/search-in-rotated-sorted-array/)

整数数组 nums 按升序排列，数组中的值 互不相同 。

在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。

给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。

你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。

示例1：
```
输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
```

示例2：
```
输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
```

示例3：
```
输入：nums = [1], target = 0
输出：-1
```

## 解题思路

### 1. 普通二分为什么不能直接使用

普通升序数组可以直接比较 `nums[mid]` 和 `target`：

- `nums[mid] < target`，目标一定在右边；
- `nums[mid] > target`，目标一定在左边。

但是旋转数组整体不再有序，例如：

```text
[4, 5, 6, 7, 0, 1, 2]
```

当 `nums[mid] > target` 时，目标不一定在左边，因为较小的数字可能被旋转到了右边。

因此，本题不能只比较 `nums[mid]` 和 `target`，还要先判断哪一半是有序的。

### 2. 本题的核心规律：至少有一半是有序的

旋转数组只有一个从大数突然回到小数的“断点”。用 `mid` 将当前区间分成左右两半后，断点最多只会出现在其中一半，另一半一定保持升序。

例如：

```text
[4, 5, 6, 7, 0, 1, 2]
          mid
```

左半部分 `[4, 5, 6, 7]` 是有序的，右半部分包含旋转断点。

再如：

```text
[6, 7, 0, 1, 2, 4, 5]
          mid
```

右半部分 `[1, 2, 4, 5]` 是有序的。

判断方式是：

```js
if (nums[left] <= nums[mid]) {
  // 左半部分有序
} else {
  // 右半部分有序
}
```

题目说明数组中的值互不相同，因此这个判断不会被大量重复元素干扰。

### 3. 每轮二分到底在做什么

每一轮都按照下面的顺序思考：

1. `nums[mid]` 是否就是目标；
2. 左右两半中哪一半有序；
3. `target` 是否处于这段有序区间的数值范围内；
4. 如果在，就保留这一半；如果不在，就去另一半。

这里真正需要一直保证的是：

> 如果目标存在，那么每次缩小区间以后，目标仍然位于 `[left, right]` 中。

### 4. 四个边界符号如何记忆

在进入区间判断前，已经检查过：

```js
nums[mid] !== target
```

所以判断目标是否在左侧有序区间时，使用：

```js
nums[left] <= target && target < nums[mid]
```

对应范围：

```text
[nums[left], nums[mid])
```

判断目标是否在右侧有序区间时，使用：

```js
nums[mid] < target && target <= nums[right]
```

对应范围：

```text
(nums[mid], nums[right]]
```

可以简单记成：

- `mid` 已经检查过，所以靠近 `mid` 的符号使用严格比较 `<`；
- `left` 和 `right` 仍可能是答案，所以两端使用 `<=`。

### 5. func3 当前的问题

你的整体模型已经正确：先判断哪一半有序，再判断目标是否位于有序区间中。当前主要有两个边界问题。

#### 问题一：判断左半部分有序时使用了 `<`

当前写法：

```js
if (nums[left] < nums[mid])
```

推荐写法：

```js
if (nums[left] <= nums[mid])
```

当区间只剩两个元素时，`mid` 可能等于 `left`。此时左半部分虽然只有一个元素，但仍然应该被认为是有序的。

例如：

```text
nums = [1, 3], target = 3
left = 0, mid = 0, right = 1
```

此时 `nums[left] === nums[mid]`。使用 `<` 会错误地进入“右半部分有序”的分支，并可能排除正确答案。

#### 问题二：右侧区间排除了 `nums[right]`

当前写法：

```js
nums[mid] <= target && nums[right] > target
```

推荐写法：

```js
nums[mid] < target && target <= nums[right]
```

目标完全可能刚好等于 `nums[right]`，因此右边界必须包含在判断范围内。

当前版本的最小反例：

```text
nums = [1, 3], target = 3
期望结果：1
当前结果：-1
```

另外，函数名 `serch_func3` 中的 `serch` 少了字母 `a`，建议后续改为 `search_func3`，避免测试或调用时找不到函数。

### 6. 推荐写法

```js
const search_func3 = (nums, target) => {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // 左半部分有序
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      // 右半部分有序
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
```

时间复杂度为 `O(log n)`：每轮都会排除大约一半的搜索区间。

空间复杂度为 `O(1)`：只使用了 `left`、`right` 和 `mid` 等固定数量的变量。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

在原升序数组经一次旋转后的数组中查找目标值下标。

### 官方示例

#### 示例 1

```text
nums = [4,5,6,7,0,1,2]
target = 0
输出 = 4
```

#### 示例 2

```text
nums = [4,5,6,7,0,1,2]
target = 3
输出 = -1
```

#### 示例 3

```text
nums = [1]
target = 0
输出 = -1
```

### 约束与训练提示

- 1 <= nums.length <= 5000
- -10^4 <= nums[i] <= 10^4
- nums 中的每个值都 独一无二
- 题目数据保证 nums 在预先未知的某个下标上进行了旋转
- -10^4 <= target <= 10^4
- 每次二分至少有一半区间仍然有序。
- 目标不存在时返回 -1。

### 本题测试

```bash
npm run test:problem -- 33
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-18
- 结果：独立写出核心模型，边界条件需要调整
- 用时：
- 提交次数：
- 核心模型：每轮先判断哪一半有序，再判断 target 是否位于该有序区间中
- 核心不变量：如果目标存在，缩小区间后目标仍位于 `[left, right]` 中
- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 错误标签：边界条件
- 最小反例：`nums = [1,3], target = 3`，当前 func3 返回 `-1`
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
