<!-- top150-meta:start -->
> Top Interview 150 · 二分查找 · 中等 · 已有代码
> [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/) · 标签：数组 / 二分查找
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 中等 · 已有代码与测试
> [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/) · 标签：数组 / 二分查找
<!-- hot100-meta:end -->

# [153. 寻找旋转排序数组中的最小值](https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/)

## 解题思路

### 1. 先理解旋转数组的结构

原数组本来是一个升序数组，旋转后会变成“两段升序区间”：

```text
[3, 4, 5, 1, 2]
       ↑
      断点
```

最小值就是旋转断点后面的第一个元素。题目要求 `O(log n)`，所以不能从头到尾扫描，而要用二分不断排除不可能的区间。

### 2. 为什么比较 `nums[mid]` 和 `nums[right]`

在当前区间 `[left, right]` 中，比较中间值和右边界：

#### 情况一：`nums[mid] < nums[right]`

说明从 `mid` 到 `right` 是正常升序的：

```text
... ? ... nums[mid] ... nums[right]
             较小       较大
```

最小值不可能在 `(mid, right]` 中，因为这一段都比 `nums[mid]` 大。最小值可能是 `mid`，也可能在 `mid` 左边，因此保留 `mid`：

```js
right = mid
```

#### 情况二：`nums[mid] > nums[right]`

说明旋转断点在 `mid` 的右边，最小值一定在 `mid + 1` 到 `right` 之间：

```js
left = mid + 1
```

题目保证元素互不相同，因此不会出现 `nums[mid] === nums[right]` 的正常中间状态；相等通常只会发生在区间收缩到一个元素时。

### 3. 这道题最重要的不变量

每次缩小区间后，都要保证：

> 当前区间 `[left, right]` 一定包含数组最小值。

因此两种更新方式不同：

- `right = mid`：`mid` 可能就是最小值，不能排除；
- `left = mid + 1`：`mid` 已经确定不是最小值，可以排除。

### 4. 为什么循环使用 `left < right`

你的当前代码使用了：

```js
while (left <= right)
```

但同时又使用：

```js
right = mid
```

这两者不匹配。

当 `left === right` 时，区间只剩一个元素，这个元素就是答案。此时如果继续循环：

```js
mid === left === right
```

由于 `nums[mid] === nums[right]`，会进入 `left = mid + 1`，直接把唯一的答案排除掉。

例如未旋转数组：

```text
nums = [11, 13, 15, 17]
```

最后会收敛到：

```text
left = 0, right = 0
```

此时 `nums[0]` 就是最小值。如果继续执行，就会把 `left` 移到 `1`，最终错误返回 `13`。

所以应该让循环在区间只剩一个元素时停止：

```js
while (left < right)
```

循环结束时，`left === right`，直接返回 `nums[left]`。

### 5. 推荐写法

```js
const findMin = (nums) => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2)

    if (nums[mid] < nums[right]) {
      // 最小值在 [left, mid]，mid 不能排除
      right = mid
    } else {
      // 最小值在 [mid + 1, right]
      left = mid + 1
    }
  }

  return nums[left]
}
```

### 6. 和 33 题的联系

33 题是“在旋转数组中查找目标值”，每轮要判断哪一半有序，再判断目标是否在有序区间中。

153 题只需要找最小值，不需要判断 `target`。比较 `nums[mid]` 和 `nums[right]` 后，就能直接判断最小值在哪一半，所以逻辑更简单：

```text
33：判断有序区间 → 判断 target 是否在其中
153：比较 mid 和 right → 直接判断最小值在哪边
```

## 边界条件

- 长度为 `1`：循环不执行，直接返回唯一元素；
- 未旋转数组：最小值是 `nums[0]`，正常收敛；
- 旋转一次：最小值在数组末尾，仍可正常收敛；
- 完整旋转：数组等价于未旋转数组；
- 循环结束条件必须是 `left < right`，否则可能越过答案。

时间复杂度：`O(log n)`，每轮排除大约一半元素。

空间复杂度：`O(1)`，只使用固定数量的指针变量。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

找出无重复升序数组旋转后的最小元素。

### 官方示例

#### 示例 1

```text
nums = [3,4,5,1,2]
输出 = 1
```

#### 示例 2

```text
nums = [4,5,6,7,0,1,2]
输出 = 0
```

#### 示例 3

```text
nums = [11,13,15,17]
输出 = 11
```

### 约束与训练提示

- n == nums.length
- 1 <= n <= 5000
- -5000 <= nums[i] <= 5000
- nums 中的所有整数 互不相同
- nums 原来是一个升序排序的数组，并进行了 1 至 n 次旋转
- 将中间值与右边界比较可判断最小值所在半区。
- 数组可能未旋转或旋转完整长度。

### 本题测试

```bash
npm run test:problem -- 153
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-18
- 结果：独立写出主要判断，循环边界需要调整
- 用时：
- 提交次数：
- 核心模型：比较 `nums[mid]` 和 `nums[right]`，定位最小值所在区间
- 核心不变量：最小值始终位于当前 `[left, right]` 中
- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 错误标签：边界条件 / 不变量
- 最小反例：`nums = [11,13,15,17]`，当前写法返回 `13`，正确答案是 `11`
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
