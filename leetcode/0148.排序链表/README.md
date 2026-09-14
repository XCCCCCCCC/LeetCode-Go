<!-- top150-meta:start -->
> Top Interview 150 · 分治 · 中等 · 已有代码
> [148. 排序链表](https://leetcode.cn/problems/sort-list/) · 标签：链表 / 双指针 / 分治 / 排序 / 归并排序
<!-- top150-meta:end -->

<!-- hot100-meta:start -->

> Hot 100 · 链表 · 中等 · 未开始
> [148. 排序链表](https://leetcode.cn/problems/sort-list/) · 标签：链表 / 双指针 / 分治 / 排序 / 归并排序

<!-- hot100-meta:end -->

# [148. 排序链表](https://leetcode.cn/problems/sort-list/)

## 解题思路

### 当前代码的总体方向

这题使用归并排序是正确方向，整体可以理解成两个动作：

```text
拆：把一条长链表不断拆成两条短链表
合：把两条已有序的链表合并成一条有序链表
```

例如：

```text
[4,2,1,3]
   ↓ 拆分
[4,2]  [1,3]
   ↓ 继续拆
[4] [2] [1] [3]
   ↓ 合并
[2,4]  [1,3]
   ↓ 再合并
[1,2,3,4]
```

单个节点天然有序，所以递归拆到只剩一个节点时就可以停止，再逐层向上合并。

### 当前代码的直接问题：外层函数没有返回结果

当前外层已经定义了 `merge` 和 `toSortList`，但末尾又声明了一个同名的内部函数：

```js
var sortList = function (head) {
  return toSortList(head, null)
}
```

这段代码只是在外层函数内部创建了一个新函数，并没有调用它。外层 `sortList` 执行到末尾后没有 `return`，所以实际返回 `undefined`。

这里应该直接写：

```js
return toSortList(head, null)
```

也就是：

```js
var sortList = function (head) {
  const merge = (...) => {
    // 合并两条有序链表
  }

  const toSortList = (...) => {
    // 拆分并排序
  }

  return toSortList(head, null)
}
```

当前官方测试中，非空链表都失败为 `[]`，根本原因就是测试工具收到的是 `undefined`，不是排序逻辑本身立即把节点弄丢了。

### 拆分：`toSortList(head, tail)`

当前代码使用的是左闭右开区间：

```text
[head, tail)
```

意思是：

- 包含 `head` 指向的节点；
- 不包含 `tail` 指向的节点；
- 当 `tail === null` 时，区间一直延伸到链表末尾。

递归终止条件是区间中只剩一个节点：

```js
if (head.next === tail) {
  head.next = null
  return head
}
```

`head.next = null` 很重要。它会把这个单节点链表与原链表后面的部分断开，保证返回的是一条真正独立的单节点链表。

快慢指针负责找到中点：

```text
slow：每次走一步
fast：每次走两步
```

当 `fast` 到达 `tail` 时，`slow` 大约走了区间的一半，因此：

```js
const mid = slow
```

可以把原区间拆成：

```text
[head, mid)
[mid, tail)
```

然后分别排序，再合并：

```js
return merge(
  toSortList(head, mid),
  toSortList(mid, tail)
)
```

拆分阶段的核心不变量：每次递归都把 `[head, tail)` 拆成两个不重叠且合起来仍是原区间的子区间。

### 合并：两条有序链表选较小节点

`merge(list1, list2)` 的前提是：`list1` 和 `list2` 已经分别有序。

比较两个头节点：

```js
if (list1.val > list2.val) {
  // list2 更小，list2 应该成为当前结果的头
} else {
  // list1 更小或相等，list1 应该成为当前结果的头
}
```

如果 `list2` 更小：

```js
list2.next = merge(list1, list2.next)
return list2
```

可以通俗地理解成：

1. 已经确认 `list2` 是当前最小节点；
2. 剩下只需要继续合并 `list1` 和 `list2.next`；
3. 把合并结果接到 `list2.next`；
4. 返回新的头节点 `list2`。

合并阶段的核心不变量：每次选择两个链表当前头节点中较小的一个，接到结果链表前面；剩余部分仍然是两条有序链表。

### 为什么归并排序是 `O(n log n)`

拆分层数大约是 `log n`：

```text
n → n/2 → n/4 → ... → 1
```

每一层合并时，所有节点合起来一共处理 `n` 次。因此：

```text
每层工作量 O(n) × 约 log n 层 = O(n log n)
```

当前自顶向下写法的拆分递归深度是 `O(log n)`，但当前 `merge` 也使用递归。合并一条很长的链表时，调用深度最坏可以接近 `O(n)`；JavaScript 在数据量较大时可能出现：

```text
RangeError: Maximum call stack size exceeded
```

本地验证中，修复外层返回后，10000 和 20000 个倒序节点可以通过，但 50000 个倒序节点发生了调用栈溢出。

因此，更稳妥的写法是保留递归拆分，但把合并改成迭代。

### 推荐：使用迭代方式合并

```js
const merge = (list1, list2) => {
  const dummy = { next: null }
  let cur = dummy

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }

  cur.next = list1 !== null ? list1 : list2
  return dummy.next
}
```

其中：

```text
dummy：帮助统一结果链表头节点的连接
cur：结果链表当前的尾节点
list1、list2：两条链表中尚未合并部分的头节点
```

这种合并仍然是 `O(n)` 时间，但不会为每个节点增加一次函数调用。

综合复杂度：

```text
时间复杂度：O(n log n)
空间复杂度：O(log n)
```

这里的 `O(log n)` 来自拆分时的递归调用栈。题目进阶要求的严格 `O(1)` 额外空间，需要使用自底向上的迭代归并，可以放到二刷再学习。

这题看题解后想到“拆成两个子链表，再做归并排序”的方向是正确的。第一次重点应放在理解“拆到单节点，再合并有序链表”，不需要立刻掌握自底向上的常数空间版本。

## 边界条件

- 空链表：`head === null`，直接返回 `null`。
- 单节点链表：天然有序，需要把它与原区间后面断开后返回。
- 两节点链表：适合检查中点是否正确，以及合并后有没有成环或断链。
- 已经升序：结果顺序不变。
- 完全倒序：可以验证每一层拆分和合并是否正确。
- 存在重复值：使用 `<=` 时优先选择左侧链表节点，可以保持排序稳定性。
- 节点数量较大：递归 `merge` 可能造成 JavaScript 调用栈溢出，推荐迭代合并。

<!-- hot100-problem:start -->

## 题目说明（本地训练版）

将单链表按节点值升序排列。

### 官方示例

#### 示例 1

```text
head = [4,2,1,3]
输出 = [1,2,3,4]
```

#### 示例 2

```text
head = [-1,5,3,4,0]
输出 = [-1,0,3,4,5]
```

#### 示例 3

```text
head = []
输出 = []
```

### 约束与训练提示

- 目标时间复杂度为 O(n log n)。
- 自底向上归并排序可达到常数额外空间。

### 本题测试

```bash
npm run test:problem -- 148
```

<!-- hot100-problem:end -->

<!-- hot100-training:start -->

## 训练复盘

- 训练日期：2026-08-13
- 结果：题解后复现，入口返回存在实现错误
- 用时：
- 提交次数：
- 核心模型：快慢指针拆分链表，递归排序左右两段，再合并两条有序链表
- 核心不变量：拆分区间为 `[head, tail)`；合并时每次选择两个头节点中较小者
- 时间复杂度：O(n log n)
- 空间复杂度：当前递归合并最坏 O(n) 调用栈；改为迭代合并后为 O(log n)
- 错误标签：返回值 / 函数作用域 / 递归栈 / 分治理解
- 最小反例：`[2,1]`，当前外层函数返回 `undefined`，修复入口后应得到 `[1,2]`
- D+1：2026-08-14，修复入口并画出 `[4,2,1,3]` 的完整拆分与合并过程
- D+3：2026-08-16，闭卷写出迭代合并两条有序链表
- D+7：2026-08-20，独立组合“找中点、递归拆分、迭代合并”三个部分
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
