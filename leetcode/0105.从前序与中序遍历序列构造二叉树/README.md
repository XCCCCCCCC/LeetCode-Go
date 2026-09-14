<!-- top150-meta:start -->
> Top Interview 150 · 二叉树 · 中等 · 已有代码
> [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) · 标签：树 / 数组 / 哈希表 / 分治 / 二叉树
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 二叉树 · 中等 · 未开始
> [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) · 标签：树 / 数组 / 哈希表 / 分治 / 二叉树
<!-- hot100-meta:end -->

# [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

根据二叉树的前序遍历和中序遍历重建原树。

### 官方示例

#### 示例 1

```text
preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
输出 = [3,9,20,null,null,15,7]
```

#### 示例 2

```text
preorder = [-1]
inorder = [-1]
输出 = [-1]
```

### 约束与训练提示

- 1 <= preorder.length <= 3000
- inorder.length == preorder.length
- -3000 <= preorder[i], inorder[i] <= 3000
- preorder 和 inorder 均 无重复 元素
- inorder 均出现在 preorder
- preorder 保证 为二叉树的前序遍历序列
- inorder 保证 为二叉树的中序遍历序列
- 前序序列的首元素是当前子树根节点。
- 中序序列可用来划分左右子树范围。

### 本题测试

```bash
npm run test:problem -- 105
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
