<!-- top150-meta:start -->
> Top Interview 150 · 二叉搜索树 · 中等 · 已有代码
> [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/) · 标签：树 / 深度优先搜索 / 二叉搜索树 / 二叉树
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 中等 · 独立通过
> [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/) · 标签：树 / 深度优先搜索 / 二叉搜索树 / 二叉树
<!-- hot100-meta:end -->

# [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

## 解题思路

### 核心性质

二叉搜索树满足：左子树所有节点小于当前节点，右子树所有节点大于当前节点。因此对 BST 做中序遍历（左、根、右）时，得到的节点值一定是升序排列。

例如：

```text
      3
     / \
    1   4
     \
      2
```

中序顺序是：

```text
1、2、3、4
```

所以第 `k` 小的元素就是中序结果数组中的下标 `k - 1` 的元素。题目中的 `k` 从 1 开始，而数组下标从 0 开始，因此需要减 1。

### 当前写法

```js
var kthSmallest = function (root, k) {
  const result = []

  function dfs(node) {
    if (node === null) {
      return
    }

    dfs(node.left)
    result.push(node.val)
    dfs(node.right)
  }

  dfs(root)
  return result[k - 1]
}
```

递归函数的含义是：把以 `node` 为根的子树按中序顺序加入 `result`。空节点直接结束，当前节点在左子树处理完成后加入，最后处理右子树。

### 优化方向

当前写法会遍历整棵树并保存所有节点，时间复杂度为 `O(n)`，额外空间为 `O(n)`（结果数组）加递归栈。

由于只需要第 `k` 个元素，也可以在中序遍历过程中用计数器记录访问了多少个节点，访问到第 `k` 个就停止。这样不必保存完整数组，额外空间可降为递归栈的 `O(h)`。

## 边界条件

- 空树时递归直接返回，不会访问 `null.val`。
- `k` 从 `1` 开始，所以取数组元素时使用 `result[k - 1]`。
- BST 的中序结果是升序，普通二叉树不能直接套用这个结论。
- 当前写法会完整遍历，即使已经知道第 `k` 小元素也不会提前停止。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

返回二叉搜索树中按从小到大排列的第 k 个元素。

### 官方示例

#### 示例 1

```text
root = [3,1,4,null,2]
k = 1
输出 = 1
```

#### 示例 2

```text
root = [5,3,6,2,4,null,null,1]
k = 3
输出 = 3
```

### 约束与训练提示

- 树中的节点数为 n 。
- 1 <= k <= n <= 10^4
- 0 <= Node.val <= 10^4
- 二叉搜索树的中序遍历是升序序列。
- 找到第 k 个后可以提前停止。

### 本题测试

```bash
npm run test:problem -- 230
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：BST 中序遍历得到升序序列，再取第 `k - 1` 个元素
- 核心不变量：中序遍历每次加入 `result` 的节点，都比后加入的右侧节点更小
- 时间复杂度：`O(n)`
- 空间复杂度：`O(n)`，结果数组占用 `O(n)`，递归栈最多 `O(h)`
- 错误标签：
- 最小反例：单节点树、`k = 1`、`k = n`、只有一侧子树的 BST
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
