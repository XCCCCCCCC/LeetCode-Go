<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 简单 · 独立通过
> [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/) · 标签：树 / 深度优先搜索 / 广度优先搜索 / 二叉树
<!-- hot100-meta:end -->

# [101. 对称二叉树](https://leetcode.cn/problems/symmetric-tree/)

## 解题思路

### 核心想法

对称不是判断左右子树“同方向相同”，而是判断它们是否互为镜像：

```text
左子树的左边  ↔ 右子树的右边
左子树的右边  ↔ 右子树的左边
```

因此递归函数需要同时接收两个节点：`isMirror(left, right)`，表示判断这两个节点是否互为镜像。

### 四种判断

1. `left` 和 `right` 都为空：两边同时到达尽头，返回 `true`。
2. 只有一个为空：结构不同，返回 `false`。
3. 两个值不同：镜像位置的值不同，返回 `false`。
4. 值相同：继续交叉比较左右孩子。

```js
return isMirror(left.left, right.right) &&
       isMirror(left.right, right.left)
```

完整代码：

```js
var isSymmetric = function (root) {
  function isMirror(left, right) {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null) {
      return false
    }
    if (left.val !== right.val) {
      return false
    }

    return isMirror(left.left, right.right) &&
           isMirror(left.right, right.left)
  }

  return isMirror(root.left, root.right)
}
```

核心不变量：`isMirror(left, right)` 返回后，结果准确表示这两个子树是否互为镜像。

这道题的递归返回布尔值，与 104 返回深度、226 直接修改节点不同。

## 边界条件

- 题目保证根节点不为空，可以直接比较 `root.left` 和 `root.right`。
- 两边同时为空才是对称；一边为空、一边不为空必须返回 `false`。
- 值相同不代表对称，还必须继续检查子树结构。
- 递归比较必须是交叉方向，不能把左左、右右直接对应比较。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

判断一棵二叉树是否关于中心轴镜像对称。

### 官方示例

#### 示例 1

```text
root = [1,2,2,3,4,4,3]
输出 = true
```

#### 示例 2

```text
root = [1,2,2,null,3,null,3]
输出 = false
```

### 约束与训练提示

- 树中节点数目在范围 [1, 1000] 内
- -100 <= Node.val <= 100
- 需要成对比较左子树的左侧与右子树的右侧。
- 空节点的成对情况必须一致。

### 本题测试

```bash
npm run test:problem -- 101
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：DFS 递归比较两棵子树是否镜像
- 核心不变量：`isMirror(left, right)` 准确判断两个节点及其子树的镜像关系
- 时间复杂度：`O(n)`
- 空间复杂度：`O(h)`，`h` 为树高，来自递归调用栈
- 错误标签：
- 最小反例：`[1]`、`[1,2,2]`、`[1,2,2,3,null,null,3]`
- D+1：
- D+3：
- D+7：
<!-- hot100-training:end -->
