<!-- hot100-meta:start -->
> Hot 100 · 普通数组 · 中等 · 未开始
> [56. 合并区间](https://leetcode.cn/problems/merge-intervals/) · 标签：数组 / 排序 / 快速排序
<!-- hot100-meta:end -->

# [56. 合并区间](https://leetcode.cn/problems/merge-intervals/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

合并所有存在重叠的区间，返回互不重叠的覆盖结果。

### 官方示例

#### 示例 1

```text
intervals = [[1,3],[2,6],[8,10],[15,18]]
输出 = [[1,6],[8,10],[15,18]]
```

#### 示例 2

```text
intervals = [[1,4],[4,5]]
输出 = [[1,5]]
```

#### 示例 3

```text
intervals = [[4,7],[1,4]]
输出 = [[1,7]]
```

### 约束与训练提示

- 1 <= intervals.length <= 10^4
- intervals[i].length == 2
- 0 <= start_i <= end_i <= 10^4
- 通常先按区间起点排序。
- 相交时需更新当前区间的最右端。

### 本题测试

```bash
npm run test:problem -- 56
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
