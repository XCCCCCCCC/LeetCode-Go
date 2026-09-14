<!-- top150-meta:start -->
> Top Interview 150 · 数组 / 字符串 · 中等 · 已有代码
> [238. 除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/) · 标签：数组 / 前缀和
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 普通数组 · 中等 · 未开始
> [238. 除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/) · 标签：数组 / 前缀和
<!-- hot100-meta:end -->

# [238. 除了自身以外数组的乘积](https://leetcode.cn/problems/product-of-array-except-self/)

## 解题思路

对于下标 `i`，除自身以外的乘积可以拆成两部分：

```text
左侧所有元素的乘积 * 右侧所有元素的乘积
```

### 当前版本：左右乘积数组

你的实现分别维护了三个数组：

- `left[i]`：`i` 左侧所有元素的乘积；
- `right[i]`：`i` 右侧所有元素的乘积；
- `result[i]`：`left[i] * right[i]`。

边界位置没有左侧或右侧元素，因此对应乘积初始化为乘法的单位元 `1`：

```text
left[0] = 1
right[n - 1] = 1
```

例如：

```text
nums = [1,2,3,4]

left  = [1,1,2,6]
right = [24,12,4,1]

result = [1*24, 1*12, 2*4, 6*1]
       = [24,12,8,6]
```

核心不变量：计算 `left[i]` 时，它恰好是 `nums[0..i-1]` 的乘积；计算 `right[i]` 时，它恰好是 `nums[i+1..n-1]` 的乘积。

这版时间复杂度为 O(n)，但创建了 `left`、`right` 和 `result` 三个长度为 `n` 的数组：

```text
辅助空间：O(n)
输出空间：O(n)
```

它没有使用除法，因此不需要单独讨论除数为 0 的情况。零元素会自然地参与乘法：

- 没有零：正常计算；
- 有一个零：只有零所在位置可能得到非零结果，其余位置都为 0；
- 有两个或更多零：所有结果都是 0。

### 优化版本：把输出数组当作左侧乘积

题目要求返回一个长度为 `n` 的结果数组，这个数组本来就必须存在，因此可以把 `result` 直接用来保存左侧乘积，不再单独创建 `left` 和 `right`：

```js
var productExceptSelf_func2 = function (nums) {
  const result = new Array(nums.length).fill(1)

  let leftProduct = 1
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProduct
    leftProduct *= nums[i]
  }

  let rightProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProduct
    rightProduct *= nums[i]
  }

  return result
}
```

以 `[1,2,3,4]` 为例：

```text
第一轮结束，result 保存左侧乘积：[1,1,2,6]

从右向左累乘右侧结果：
最后得到：[24,12,8,6]
```

第二轮中，`rightProduct` 表示当前位置右侧所有元素的乘积。每次先把它乘进 `result[i]`，再把当前元素加入 `rightProduct`，这样当前元素本身不会被乘进去。

优化后：

```text
时间复杂度：O(n)
辅助空间复杂度：O(1)
输出空间复杂度：O(n)
```

这里的 O(1) 是“除返回结果外”的额外空间；`result` 仍然需要 O(n)，因为题目要求返回 n 个结果。

## 边界条件

- 数组长度至少为 2。
- 第一个位置没有左侧元素，左侧乘积应为 1。
- 最后一个位置没有右侧元素，右侧乘积应为 1。
- 必须禁止使用除法，因为数组可能包含 0。
- 需要测试没有零、一个零、多个零和负数等情况。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

为每个位置计算除自身以外所有元素的乘积。

### 官方示例

#### 示例 1

```text
nums = [1,2,3,4]
输出 = [24,12,8,6]
```

#### 示例 2

```text
nums = [-1,1,0,-3,3]
输出 = [0,0,9,0,0]
```

### 约束与训练提示

- 2 <= nums.length <= 10^5
- -30 <= nums[i] <= 30
- 输入 保证 数组 answer[i] 在 32 位 整数范围内
- 不能使用除法。
- 期望线性时间，进阶要求常数额外空间。

### 本题测试

```bash
npm run test:problem -- 238
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-06
- 结果：独立通过（左右乘积数组）；常数额外空间版本待复写
- 用时：
- 提交次数：
- 核心模型：左侧乘积 × 右侧乘积；输出数组复用
- 核心不变量：`leftProduct` 和 `rightProduct` 始终不包含当前位置元素
- 时间复杂度：O(n)
- 空间复杂度：当前版本辅助 O(n)；优化版本辅助 O(1)，输出 O(n)
- 错误标签：空间复杂度 / 不变量
- 最小反例：`[-1,1,0,-3,3]`，验证零和负数
- D+1：2026-08-07，闭卷写出两次扫描的顺序
- D+3：2026-08-09
- D+7：2026-08-13
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
