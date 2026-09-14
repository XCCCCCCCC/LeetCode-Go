<!-- top150-meta:start -->
> Top Interview 150 · 堆 · 困难 · 已有代码
> [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/) · 标签：设计 / 双指针 / 数据流 / 排序 / 堆（优先队列）
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 堆 · 困难 · 未开始
> [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/) · 标签：设计 / 双指针 / 数据流 / 排序 / 堆（优先队列）
<!-- hot100-meta:end -->

# [295. 数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

实现可以不断加入整数并随时返回当前中位数的数据结构。

### 官方示例

#### 示例 1

```text
operations = ["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"]
arguments = [[],[1],[2],[],[3],[]]
输出 = [null,null,null,1.5,null,2]
```

### 约束与训练提示

- -10^5 <= num <= 10^5
- 在调用 findMedian 之前，数据结构中至少有一个元素
- 最多 5 * 10^4 次调用 addNum 和 findMedian
- 可用一个大根堆和一个小根堆分别维护较小与较大的一半数据。
- 两个堆的数量差不能超过一。

### 本题测试

```bash
npm run test:problem -- 295
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
