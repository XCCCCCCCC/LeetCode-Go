<!-- hot100-meta:start -->
> Hot 100 · 栈 · 中等 · 未开始
> [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/) · 标签：栈 / 数组 / 单调栈
<!-- hot100-meta:end -->

# [739. 每日温度](https://leetcode.cn/problems/daily-temperatures/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

对每一天的温度，计算要等多少天才会遇到更高温度。

### 官方示例

#### 示例 1

```text
temperatures = [73,74,75,71,69,72,76,73]
输出 = [1,1,4,2,1,1,0,0]
```

#### 示例 2

```text
temperatures = [30,40,50,60]
输出 = [1,1,1,0]
```

#### 示例 3

```text
temperatures = [30,60,90]
输出 = [1,1,0]
```

### 约束与训练提示

- 1 <= temperatures.length <= 10^5
- 30 <= temperatures[i] <= 100
- 之后不会出现更高温度时答案为零。
- 单调栈中保存尚未找到更高温度的下标。

### 本题测试

```bash
npm run test:problem -- 739
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
