<!-- top150-meta:start -->
> Top Interview 150 · 二叉树 · 简单 · 已有代码
> [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/) · 标签：树 / 深度优先搜索 / 广度优先搜索 / 二叉树
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 简单 · 独立通过
> [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/) · 标签：树 / 深度优先搜索 / 广度优先搜索 / 二叉树
<!-- hot100-meta:end -->

# [226. 翻转二叉树](https://leetcode.cn/problems/invert-binary-tree/)

## 解题思路

### 核心想法

翻转一棵树，就是把每个非空节点的左右孩子交换：

```text
node.left  ↔ node.right
```

交换当前节点后，还要继续翻转新的左子树和新的右子树。由于每棵子树本身也是一棵二叉树，可以用 DFS 递归处理。

### 递归定义

`dfs(node)` 表示：翻转以 `node` 为根的整棵子树。

处理顺序可以是：

1. 当前节点为空，停止。
2. 交换当前节点的左右孩子。
3. 递归翻转交换后的左右子树。

你的实现使用临时变量保存左孩子，避免交换时丢失引用，逻辑正确。

```js
var invertTree = function (root) {
  function dfs(node) {
    if (node === null) {
      return
    }

    const temp = node.left
    node.left = node.right
    node.right = temp

    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return root
}
```

这是**原地修改**：直接改变原节点的 `left` 和 `right` 引用，不创建新的树。

## 边界条件

- 空树直接返回空树。
- 叶子节点的左右孩子都是 `null`，交换后仍然是叶子节点。
- `if (node.left || node.right)` 不是必须的；即使两个孩子都是 `null`，直接交换也完全正确，代码可以更简洁。
- 必须先保存一个孩子引用，否则连续赋值会覆盖原来的左子树或右子树。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

交换二叉树每个节点的左右子树，返回翻转后的根节点。

### 官方示例

#### 示例 1

```text
root = [4,2,7,1,3,6,9]
输出 = [4,7,2,9,6,3,1]
```

#### 示例 2

```text
root = [2,1,3]
输出 = [2,3,1]
```

#### 示例 3

```text
root = []
输出 = []
```

### 约束与训练提示

- 树中节点数目范围在 [0, 100] 内
- -100 <= Node.val <= 100
- 每个非空节点都需要交换左右孩子。
- 递归和层序遍历均可实现。

### 本题测试

```bash
npm run test:problem -- 226
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：DFS 遍历每个节点并原地交换左右孩子
- 核心不变量：处理完 `dfs(node)` 后，以 `node` 为根的整棵子树已经完成翻转
- 时间复杂度：`O(n)`
- 空间复杂度：`O(h)`，`h` 为树高，来自递归调用栈
- 错误标签：
- 最小反例：`null`、单节点树、只有左孩子的节点、只有右孩子的节点
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
