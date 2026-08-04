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
