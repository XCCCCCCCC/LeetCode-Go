<!-- top150-meta:start -->
> Top Interview 150 · 二分查找 · 困难 · 已有代码
> [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/) · 标签：数组 / 二分查找 / 分治
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 困难 · 已有代码与测试
> [4. 寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/) · 标签：数组 / 二分查找 / 分治
<!-- hot100-meta:end -->

# [寻找两个正序数组的中位数](https://leetcode.cn/problems/median-of-two-sorted-arrays/)

给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

算法的时间复杂度应该为 O(log (m+n)) 。

示例1：
```
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

示例2：
```
输入：nums1 = [1,2], nums2 = [3,4]
输出：2.50000
解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
```

## 解题思路
**思路1**：合并数组后正序排序，然后判断出中位数。时间复杂度O(m+n)

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

求两个升序数组合并序列的中位数。

### 官方示例

#### 示例 1

```text
nums1 = [1,3]
nums2 = [2]
输出 = 2
```

#### 示例 2

```text
nums1 = [1,2]
nums2 = [3,4]
输出 = 2.5
```

### 约束与训练提示

- nums1.length == m
- nums2.length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000
- -10^6 <= nums1[i], nums2[i] <= 10^6
- 目标总时间复杂度为 O(log(m+n))。
- 需同时处理总长度的奇偶情况和空分割边界。

### 本题测试

```bash
npm run test:problem -- 4
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
