<!-- top150-meta:start -->
> Top Interview 150 · 图 · 中等 · 已有代码
> [207. 课程表](https://leetcode.cn/problems/course-schedule/) · 标签：深度优先搜索 / 广度优先搜索 / 图 / 拓扑排序 / 有向无环图
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 图论 · 中等 · 未开始
> [207. 课程表](https://leetcode.cn/problems/course-schedule/) · 标签：深度优先搜索 / 广度优先搜索 / 图 / 拓扑排序 / 有向无环图
<!-- hot100-meta:end -->

# [207. 课程表](https://leetcode.cn/problems/course-schedule/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

根据课程先修关系判断是否可以完成全部课程。

### 官方示例

#### 示例 1

```text
numCourses = 2
prerequisites = [[1,0]]
输出 = true
```

#### 示例 2

```text
numCourses = 2
prerequisites = [[1,0],[0,1]]
输出 = false
```

### 约束与训练提示

- 1 <= numCourses <= 2000
- 0 <= prerequisites.length <= 5000
- prerequisites[i].length == 2
- 0 <= a_i, b_i < numCourses
- prerequisites[i] 中的所有课程对 互不相同
- 问题等价于判断有向图是否存在环。
- 可使用入度拓扑排序或 DFS 状态标记。

### 本题测试

```bash
npm run test:problem -- 207
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
