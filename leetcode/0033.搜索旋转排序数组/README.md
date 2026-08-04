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
**思路1**：二分法，应时间复杂度要求，题目符合二分法的场景。两段区间必有一段是升序排列，收敛查找到该元素。
通过升序区间去判断收敛。如果nums[left] <= nums[right]，则判断mid，若nums[left] <= target <= nums[mid]，则向前收敛(right = mid)，否则向后收敛(left = mid + 1)。

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

- 训练日期：
- 结果：未开始 / 独立通过 / 提示后通过 / 题解后复现 / 未完成
- 用时：
- 提交次数：
- 核心模型：
- 核心不变量：
- 时间复杂度：
- 空间复杂度：
- 错误标签：模型识别 / 不变量 / 边界条件 / 实现错误 / 复杂度 / 调试低效
- 最小反例：
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
