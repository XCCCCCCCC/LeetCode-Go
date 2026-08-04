<!-- hot100-meta:start -->
> Hot 100 · 链表 · 简单 · 未开始
> [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/) · 标签：哈希表 / 链表 / 双指针
<!-- hot100-meta:end -->

# [160. 相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

找到两条单链表开始共用节点的第一个交点，无交点时返回空。

### 官方示例

#### 示例 1

```text
intersectVal = 8
listA = [4,1,8,4,5]
listB = [5,6,1,8,4,5]
skipA = 2
skipB = 3
输出 = 8
```

#### 示例 2

```text
intersectVal = 2
listA = [1,9,1,2,4]
listB = [3,2,4]
skipA = 3
skipB = 1
输出 = 2
```

#### 示例 3

```text
intersectVal = 0
listA = [2,6,4]
listB = [1,5]
skipA = 3
skipB = 2
输出 = null
```

### 约束与训练提示

- listA 中节点数目为 m
- listB 中节点数目为 n
- 1 <= m, n <= 3 * 10^4
- 1 <= Node.val <= 10^5
- 0 <= skipA <= m
- 0 <= skipB <= n
- 如果 listA 和 listB 没有交点，intersectVal 为 0
- 如果 listA 和 listB 有交点，intersectVal == listA[skipA] == listB[skipB]
- 比较的是节点引用而不是节点值。
- 解法不应改变链表结构。

### 本题测试

```bash
npm run test:problem -- 160
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
