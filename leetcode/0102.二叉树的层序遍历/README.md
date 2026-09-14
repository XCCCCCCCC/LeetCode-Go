<!-- top150-meta:start -->
> Top Interview 150 · 二叉树层次遍历 · 中等 · 已有代码
> [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/) · 标签：树 / 广度优先搜索 / 二叉树
<!-- top150-meta:end -->

<!-- hot100-meta:start -->

> Hot 100 · 二叉树 · 中等 · 独立通过
> [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/) · 标签：树 / 广度优先搜索 / 二叉树

<!-- hot100-meta:end -->

# [102. 二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/)

## 解题思路

### 核心思路：BFS 队列

层序遍历要求按照“从上到下、同一层从左到右”的顺序访问节点，适合使用广度优先搜索（BFS）。

队列保存所有“已经发现但还没有处理”的节点。队列先进先出，因此父节点处理后加入的孩子，会在后面被处理。

### 如何区分每一层

每轮开始时记录当前未处理节点数量：

```js
const levelSize = queue.length - head
```

这 `levelSize` 个节点全部属于当前层。本轮处理过程中，新加入队列的孩子属于下一层，不能放进当前层数组。处理完固定数量的节点后，再把 `currentLevel` 加入结果。

### 队列实现

使用 `head` 下标模拟出队：

```js
const node = queue[head++]
```

比 `queue.shift()` 更高效，因为不会反复移动数组中的剩余元素。

### 完整代码

```js
var levelOrder = function (root) {
  if (root === null) {
    return []
  }

  const result = []
  const queue = [root]
  let head = 0

  while (head < queue.length) {
    const levelSize = queue.length - head
    const currentLevel = []

    for (let i = 0; i < levelSize; i++) {
      const node = queue[head++]
      currentLevel.push(node.val)

      if (node.left !== null) {
        queue.push(node.left)
      }
      if (node.right !== null) {
        queue.push(node.right)
      }
    }

    result.push(currentLevel)
  }

  return result
}
```

### 执行过程

以 `[3,9,20,null,null,15,7]` 为例：

```text
第一轮：队列 [3]       → 当前层 [3]       → 加入 9、20
第二轮：队列 [9,20]    → 当前层 [9,20]    → 加入 15、7
第三轮：队列 [15,7]    → 当前层 [15,7]
```

最终结果为 `[[3], [9,20], [15,7]]`。

## 边界条件

- 空树直接返回 `[]`。
- 每轮必须在处理前记录 `levelSize`，否则本轮新加入的孩子会被错误地当成当前层处理。
- 只把非空的 `left`、`right` 放入队列。
- `head` 只向前移动，不需要真的删除已经处理的节点。

<!-- hot100-problem:start -->

## 题目说明（本地训练版）

按层从上到下返回二叉树节点值，每一层单独形成一个数组。

### 官方示例

#### 示例 1

```text
root = [3,9,20,null,null,15,7]
输出 = [[3],[9,20],[15,7]]
```

#### 示例 2

```text
root = [1]
输出 = [[1]]
```

#### 示例 3

```text
root = []
输出 = []
```

### 约束与训练提示

- 树中节点数目在范围 [0, 2000] 内
- -1000 <= Node.val <= 1000
- 队列中保存待访问节点。
- 每轮先记录当前队列长度以确定本层范围。

### 本题测试

```bash
npm run test:problem -- 102
```

<!-- hot100-problem:end -->

<!-- hot100-training:start -->

## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：BFS 队列 + `levelSize` 区分层级
- 核心不变量：每轮只处理进入本轮前队列中的节点，新发现的孩子留到下一轮
- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`，队列和结果数组共同占用空间
- 错误标签：
- 最小反例：`null`、单节点树、只有一侧子树的树
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
