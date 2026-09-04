<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 简单 · 独立通过
> [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/) · 标签：树 / 深度优先搜索 / 二叉树 / 树形 DP
<!-- hot100-meta:end -->

# [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)

## 解题思路

### 核心概念

题目求的是任意两个节点之间最长路径的**边数**，不是节点数。最长路径可能不经过根节点，因此不能只计算根节点的高度。

### 递归函数的定义

定义 `dfs(node)` 为：从 `node` 出发，向下选择一侧，能够到达的最大边数（也可以理解为当前子树的单边高度）。

空节点返回 `0`。当前节点得到左右子树的单边高度后：

```js
const leftDepth = dfs(node.left)
const rightDepth = dfs(node.right)
```

如果最长路径经过当前节点，它的边数就是：

```js
leftDepth + rightDepth
```

用这个值更新全局答案，因为最长路径可能出现在任意节点：

```js
diameter = Math.max(diameter, leftDepth + rightDepth)
```

但返回给父节点时只能选择一边，否则父节点无法继续向上连接两条路径：

```js
return Math.max(leftDepth, rightDepth) + 1
```

### 完整代码

```js
var diameterOfBinaryTree = function (root) {
  let diameter = 0

  function dfs(node) {
    if (node === null) {
      return 0
    }

    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)

    diameter = Math.max(diameter, leftDepth + rightDepth)

    return Math.max(leftDepth, rightDepth) + 1
  }

  dfs(root)
  return diameter
}
```

### 两个结果的分工

- `dfs` 的返回值：当前子树的单边高度，提供给父节点继续延长路径。
- `diameter`：遍历过程中发现的全树最大直径，最终作为答案返回。

例如叶子节点的左右高度都是 `0`，经过它的路径边数为 `0`；它返回的单边高度为 `1`，表示父节点连接到它需要经过一条边。

## 边界条件

- 直径按边数计算，单个节点或空树的直径都是 `0`。
- 递归返回的是单边高度，不能返回 `leftDepth + rightDepth + 1`，否则父节点会错误地连接两条路径。
- 必须在每个节点都更新 `diameter`，因为最长路径不一定经过根节点。
- 空节点返回 `0`，这样叶子节点可以得到高度 `1`。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

求二叉树中任意两个节点之间最长路径所经过的边数。

### 官方示例

#### 示例 1

```text
root = [1,2,3,4,5]
输出 = 3
```

#### 示例 2

```text
root = [1,2]
输出 = 1
```

### 约束与训练提示

- 树中节点数目在范围 [1, 10^4] 内
- -100 <= Node.val <= 100
- 最长路径不一定经过根节点。
- 递归返回单边深度，同时用左右深度更新答案。

### 本题测试

```bash
npm run test:problem -- 543
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：后序 DFS + 全局变量记录最大直径
- 核心不变量：`dfs(node)` 返回当前子树单边高度；`diameter` 始终保存已遍历节点中的最大左右高度之和
- 时间复杂度：`O(n)`
- 空间复杂度：`O(h)`，`h` 为树高，来自递归调用栈
- 错误标签：
- 最小反例：`[1]`、`[1,2]`、`[1,2,3,4,5]`、最长路径不经过根节点的树
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
