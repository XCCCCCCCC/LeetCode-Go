<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 简单 · 已有代码与测试
> [35. 搜索插入位置](https://leetcode.cn/problems/search-insert-position/) · 标签：数组 / 二分查找
<!-- hot100-meta:end -->

# [搜索插入位置](https://leetcode.cn/problems/search-insert-position/)

## 解题思路

当前代码采用闭区间二分：

```text
[left, right]
```

因此初始值和循环条件分别是：

```js
let left = 0
let right = nums.length - 1

while (left <= right) {
  // 搜索区间还有元素
}
```

每轮比较 `target` 和 `nums[mid]`：

- `target < nums[mid]`：排除 `mid` 及右侧，执行 `right = mid - 1`。
- `target > nums[mid]`：排除 `mid` 及左侧，执行 `left = mid + 1`。
- 两者相等：直接返回 `mid`。

### 为什么找不到时返回 `left`

循环结束时：

```js
left > right
```

此时 `right` 位于目标应该插入位置的左侧，`left` 位于插入位置，因此返回 `left`。

例如：

```text
nums = [1,3,5,6]
target = 2

搜索结束：[1] | [3,5,6]
                 ↑
               left = 1
```

所以插入位置是 `1`。

如果 `target = 7`，最后 `left = 4`，表示插入数组末尾；如果 `target = 0`，最后 `left = 0`，表示插入数组开头。

### 核心不变量

每轮循环开始时：

```text
如果 target 存在，它一定仍在 [left, right] 中；
如果 target 不存在，它的插入位置没有被错误排除。
```

### 中点写法

当前代码使用：

```js
parseInt((left + right) / 2)
```

结果正确，但 `parseInt` 更常用于字符串转整数。这里推荐使用语义更明确的：

```js
const mid = left + Math.floor((right - left) / 2)
```

### 边界情况

- `target` 小于所有元素：返回 `0`。
- `target` 大于所有元素：返回 `nums.length`。
- `target` 等于首尾元素：直接返回对应下标。
- 单元素数组：根据大小关系返回 `0` 或 `1`。
- 题目保证数组非空；当前写法对空数组也会自然返回 `0`。

### 复杂度

```text
时间复杂度：O(log n)
空间复杂度：O(1)
```

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

在升序且无重复元素的数组中查找目标值，不存在时返回应插入的位置。

### 官方示例

#### 示例 1

```text
nums = [1,3,5,6]
target = 5
输出 = 2
```

#### 示例 2

```text
nums = [1,3,5,6]
target = 2
输出 = 1
```

#### 示例 3

```text
nums = [1,3,5,6]
target = 7
输出 = 4
```

### 约束与训练提示

- 1 <= nums.length <= 10^4
- -10^4 <= nums[i] <= 10^4
- nums 为 无重复元素 的 升序 排列数组
- -10^4 <= target <= 10^4
- 返回的是保持升序的左边界位置。
- 期望 O(log n) 时间。

### 本题测试

```bash
npm run test:problem -- 35
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-17
- 结果：独立完成，闭区间边界正确
- 用时：
- 提交次数：
- 核心模型：在闭区间 `[left, right]` 中二分查找，找不到时返回 `left`
- 核心不变量：目标仍在 `[left, right]`，或插入位置未被排除
- 时间复杂度：O(log n)
- 空间复杂度：O(1)
- 错误标签：区间定义 / 插入位置 / 中点计算
- 最小反例：`[1,3,5,6]` 分别查找 `0`、`2`、`7`
- D+1：2026-08-18，闭卷写出闭区间模板并解释最终返回 `left`
- D+3：2026-08-20，手动画出 target 小于最小值和大于最大值的区间变化
- D+7：2026-08-24，开始 34 的左边界与右边界二分
<!-- hot100-training:end -->
