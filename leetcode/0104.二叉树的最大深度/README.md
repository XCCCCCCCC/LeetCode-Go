<!-- top150-meta:start -->
> Top Interview 150 · 二叉树 · 简单 · 已有代码
> [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/) · 标签：树 / 深度优先搜索 / 广度优先搜索 / 二叉树
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 简单 · 独立通过
> [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/) · 标签：树 / 深度优先搜索 / 广度优先搜索 / 二叉树
<!-- hot100-meta:end -->

# [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)

## 解题思路

### 递归定义

把 `dfs(node)` 定义为：返回以 `node` 为根节点的子树最大深度。

最大深度表示从当前节点向下走到最远叶子节点，经过的节点数量。

### 状态转移

- 如果 `node === null`，说明已经走到树的尽头，深度为 `0`。
- 如果当前节点不为空，先递归得到左右子树的深度。
- 当前子树的深度等于左右子树较大值再加上当前节点这一层：

```js
Math.max(leftDepth, rightDepth) + 1
```

代码：

```js
var maxDepth = function (root) {
  function dfs(node) {
    if (node === null) {
      return 0
    }

    const leftDepth = dfs(node.left)
    const rightDepth = dfs(node.right)

    return Math.max(leftDepth, rightDepth) + 1
  }

  return dfs(root)
}
```

这是典型的后序思路：先处理左子树和右子树，最后计算当前节点。

## 边界条件

- 空树 `null` 的深度是 `0`。
- 叶子节点左右都是空树，因此深度是 `1`。
- 空节点不能只写 `return`，否则会返回 `undefined`，导致后续计算错误。
- 节点值与深度无关，只需要关注树的连接关系。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

计算二叉树从根节点到最远叶子节点的最大节点数。

### 官方示例

#### 示例 1

```text
root = [3,9,20,null,null,15,7]
输出 = 3
```

#### 示例 2

```text
root = [1,null,2]
输出 = 2
```

### 约束与训练提示

- 树中节点的数量在 [0, 10^4] 区间内。
- -100 <= Node.val <= 100
- 空树深度为零。
- 递归返回左右子树较大深度加一。

### 本题测试

```bash
npm run test:problem -- 104
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：递归返回当前子树的最大深度
- 核心不变量：`dfs(node)` 始终返回以 `node` 为根的子树高度；空节点返回 `0`
- 时间复杂度：`O(n)`
- 空间复杂度：`O(h)`，`h` 为树高，来自递归调用栈
- 错误标签：边界条件 / 递归返回值
- 最小反例：`null`、`[1]`、`[1,null,2]`
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
