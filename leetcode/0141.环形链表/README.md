<!-- top150-meta:start -->
> Top Interview 150 · 链表 · 简单 · 已有代码
> [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/) · 标签：哈希表 / 链表 / 双指针 / Floyd 判圈算法
<!-- top150-meta:end -->

<!-- hot100-meta:start -->

> Hot 100 · 链表 · 简单 · 未开始
> [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/) · 标签：哈希表 / 链表 / 双指针 / Floyd 判圈算法

<!-- hot100-meta:end -->

# [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

## 解题思路

### 先理解什么是“环”

正常的单链表会一直向后走，最终到达 `null`：

```text
1 → 2 → 3 → null
```

环形链表中的某个节点没有指向 `null`，而是指回了前面已经出现过的节点：

```text
3 → 2 → 0 → -4
    ↑         ↓
    └─────────┘
```

如果从头节点不断执行 `head = head.next`：

- 没有环：最终一定会走到 `null`；
- 存在环：会在环里不断绕圈，并再次访问之前经过的节点。

因此，这道题可以转化为：

> 遍历链表时，是否遇到了一个以前访问过的节点？

### 当前写法：Set 记录访问过的节点

当前使用 `Set` 的思路是正确的：

```js
let temp = new Set()

while (head !== null) {
  if (temp.has(head)) {
    return true
  }
  temp.add(head)
  head = head.next
}

return false
```

每次到达一个节点时：

1. 先检查这个节点是否已经存在于 `Set`；
2. 如果存在，说明沿着 `next` 又回到了同一个节点，因此有环；
3. 如果不存在，记录当前节点，然后继续访问 `head.next`；
4. 如果最终到达 `null`，说明链表正常结束，因此没有环。

`Set` 保存的是节点对象的引用，不是节点值：

```js
temp.add(head)      // 保存节点对象
temp.has(head)      // 判断是否为同一个节点对象
temp.add(head.val)  // 这样才是在保存节点值，本题不能这样写
```

两个不同节点即使 `val` 相同，也不会被 `Set` 判断为同一个节点：

```js
const nodeA = { val: 1 }
const nodeB = { val: 1 }

nodeA.val === nodeB.val // true
nodeA === nodeB         // false
```

所以，你的代码可以准确地区分“节点值重复”和“同一个节点被再次访问”。

核心不变量：每轮循环开始时，`temp` 中保存了从头节点到当前节点之前访问过的全部节点引用；如果当前 `head` 已经在 `temp` 中，就证明发生了回环。

假设链表中共有 `n` 个不同节点：

```text
时间复杂度：O(n)
空间复杂度：O(n)
```

每个不同节点最多被处理一次，所以时间是 `O(n)`；最坏情况下，`Set` 需要保存所有节点，所以空间是 `O(n)`。

变量名方面，`temp` 可以更明确地命名为 `visited`，表示“已经访问过的节点集合”。这只会提高可读性，不影响当前逻辑。

### 二刷方向：快慢指针

如果要求额外空间为 `O(1)`，可以不保存访问记录，而是让两个指针以不同速度前进：

```text
slow：每次走 1 步
fast：每次走 2 步
```

可以把它想成两个人在一条带环的跑道上前进：

- 没有环时，跑得快的人会先到达终点 `null`；
- 有环时，两个人进入环后会一直绕圈，快指针每轮比慢指针多走一步，最终一定会从后面追上慢指针。

写法如下：

```js
var hasCycle_func2 = function (head) {
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      return true
    }
  }

  return false
}
```

循环条件必须同时检查：

```js
fast !== null && fast.next !== null
```

因为快指针一次需要走两步。只有确认 `fast` 和 `fast.next` 都不是 `null`，才能安全读取 `fast.next.next`。

这里仍然比较节点引用：

```js
slow === fast
```

不能比较 `slow.val === fast.val`，因为不同节点可以保存相同的值。

快慢指针的复杂度为：

```text
时间复杂度：O(n)
空间复杂度：O(1)
```

## 边界条件

- 空链表：直接到达 `null`，返回 `false`。
- 单节点不成环：该节点的 `next` 是 `null`，返回 `false`。
- 单节点指向自己：第二次访问同一个节点时返回 `true`。
- 多个节点的值相同：不能根据 `val` 判断，必须比较节点引用。
- 环连接到头节点或中间节点：Set 解法都能通过“再次访问同一节点”识别。
- `pos` 只用于描述测试数据如何连接，不会作为参数提供给解题逻辑。

<!-- hot100-problem:start -->

## 题目说明（本地训练版）

判断单链表中是否存在节点再次指向之前节点形成的环。

### 官方示例

#### 示例 1

```text
head = [3,2,0,-4]
pos = 1
输出 = true
```

#### 示例 2

```text
head = [1,2]
pos = 0
输出 = true
```

#### 示例 3

```text
head = [1]
pos = -1
输出 = false
```

### 约束与训练提示

- 链表中节点的数目范围是 [0, 10^4]
- -10^5 <= Node.val <= 10^5
- pos 为 -1 或者链表中的一个 有效索引 。
- 不能根据节点值判断是否相同。
- 快指针每次两步、慢指针每次一步。

### 本题测试

```bash
npm run test:problem -- 141
```

<!-- hot100-problem:end -->

<!-- hot100-training:start -->

## 训练复盘

- 训练日期：2026-08-12
- 结果：独立写出 Set 解法，正在理解链表引用与环
- 用时：
- 提交次数：
- 核心模型：记录访问过的节点引用，再次访问同一节点即存在环
- 核心不变量：Set 始终包含当前节点之前访问过的全部节点引用
- 时间复杂度：O(n)
- 空间复杂度：O(n)
- 错误标签：引用理解 / 模型确认
- 最小反例：两个值都为 `1` 的独立节点组成普通链表，不能因为值相同而判断有环
- D+1：2026-08-13，闭卷写出 Set 解法，并说明 Set 中保存的是什么
- D+3：2026-08-15，画出快慢指针在环中追赶的过程
- D+7：2026-08-19，独立写出 O(1) 空间的快慢指针解法
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
