<!-- top150-meta:start -->
> Top Interview 150 · 链表 · 中等 · 已有代码
> [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/) · 标签：链表 / 双指针
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 链表 · 中等 · 已有代码与测试
> [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/) · 标签：链表 / 双指针
<!-- hot100-meta:end -->

# [删除链表的倒数第N个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)

给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例1：
```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

示例2：
```
输入：head = [1], n = 1
输出：[]
```

示例3：
```
输入：head = [1,2], n = 1
输出：[1]
```

## 解题思路

删除一个链表节点时，真正需要找到的通常不是目标节点本身，而是它的前一个节点：

```text
前驱节点 → 待删除节点 → 后继节点
```

执行：

```js
前驱节点.next = 待删除节点.next
```

就能让链表跳过待删除节点。

唯一需要单独注意的是删除头节点，因为头节点没有前驱节点。

### `func3`：先计算长度，再找到前驱节点

当前重新写的 `func3` 思路正确，可以分成三步理解。

第一步，遍历链表得到总长度 `count`：

```js
let temp = head
let count = 0

while (temp !== null) {
  temp = temp.next
  count++
}
```

第二步，把“倒数第 `n` 个”换算成从头开始的位置：

```js
let target = count - n
```

这里的 `target` 是待删除节点的 0-based 下标：

```text
链表：[1, 2, 3, 4, 5]
下标： 0  1  2  3  4

n = 2
target = 5 - 2 = 3
```

下标 `3` 对应节点 `4`，也就是倒数第二个节点。

如果 `target === 0`，说明需要删除的就是头节点：

```js
return head.next
```

第三步，找到目标节点的前驱节点并修改 `next`：

```js
temp.next = temp.next.next
```

例如删除节点 `4`：

```text
修改前：3 → 4 → 5
修改后：3 ─────→ 5
```

当前第二次遍历中的 `count` 从 `1` 开始：

```js
temp = head
count = 1
```

这是因为此时 `temp` 要寻找的是目标节点的前驱。目标节点下标为 `target` 时，它的前驱节点正好位于第 `target` 个位置（按 1-based 计数）。

以长度为 `5`、删除倒数第 `2` 个节点为例：

```text
target = 5 - 2 = 3

count = 1：temp 指向节点 1
count = 2：temp 指向节点 2
count = 3：temp 指向节点 3，它是节点 4 的前驱
```

所以 `count === target` 时执行删除是正确的。

这段代码的复杂度为：

```text
时间复杂度：O(n)
空间复杂度：O(1)
```

虽然遍历了两次，但 `O(n) + O(n) = O(2n)`，复杂度会忽略常数，因此仍然是 `O(n)`。

### `func3` 可以进一步简化的地方

当前写法逻辑正确，但 `target` 同时涉及 0-based 下标和第二次遍历的 1-based 计数，阅读时需要多转换一次。

另外，在题目保证 `1 <= n <= 链表长度` 的情况下：

```js
if (target <= 0)
```

实际只可能遇到 `target === 0`。写成 `<= 0` 具有防御性，但理解题目时可以把它直接看成“删除头节点”。

下面这行中的三元表达式也不是必需的：

```js
temp.next = temp.next ? temp.next.next : null
```

当 `count === target` 且 `target > 0` 时，按照题目合法输入，`temp` 一定是待删除节点的前驱，因此 `temp.next` 一定存在，可以直接写：

```js
temp.next = temp.next.next
```

### 更统一的两遍写法：增加哑节点

可以在真实头节点之前放一个临时的哑节点：

```text
dummy → 1 → 2 → 3
```

这样即使要删除节点 `1`，它也有前驱节点 `dummy`，不再需要单独处理头节点：

```js
var removeNthFromEnd_func4 = function (head, n) {
  const dummy = { next: head }
  let length = 0
  let cur = head

  while (cur !== null) {
    length++
    cur = cur.next
  }

  let prev = dummy
  for (let i = 0; i < length - n; i++) {
    prev = prev.next
  }

  prev.next = prev.next.next
  return dummy.next
}
```

这里始终寻找待删除节点的前驱：

```text
删除头节点：前驱是 dummy
删除中间节点：前驱是前一个真实节点
删除尾节点：前驱是倒数第二个节点
```

哑节点的价值不是提高时间复杂度，而是统一边界逻辑。

### `func1`：快慢指针一次遍历

`func1` 使用快慢指针。先让 `fast` 比 `slow` 多走 `n` 步，再让两个指针同时向后移动。这个固定距离使得 `fast` 到达链表末尾附近时，`slow` 正好停在待删除节点的前驱。

二刷时推荐把快慢指针也和哑节点结合，这样同样不需要单独判断删除头节点：

```js
var removeNthFromEnd = function (head, n) {
  const dummy = { next: head }
  let slow = dummy
  let fast = dummy

  for (let i = 0; i <= n; i++) {
    fast = fast.next
  }

  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }

  slow.next = slow.next.next
  return dummy.next
}
```

核心不变量：完成初始移动后，`fast` 始终比 `slow` 超前 `n + 1` 个连接；当 `fast` 到达 `null` 时，`slow` 正好位于待删除节点的前驱。

## 边界条件

- 删除头节点：`n` 等于链表长度，应返回 `head.next`；使用哑节点可以统一处理。
- 删除尾节点：`n === 1`，需要让倒数第二个节点指向 `null`。
- 单节点链表：删除后返回 `null`。
- 两节点链表：分别验证删除头和删除尾。
- 题目保证 `n` 合法，不需要处理 `n` 大于链表长度的情况。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

删除链表中倒数第 n 个节点，返回修改后的头节点。

### 官方示例

#### 示例 1

```text
head = [1,2,3,4,5]
n = 2
输出 = [1,2,3,5]
```

#### 示例 2

```text
head = [1]
n = 1
输出 = []
```

#### 示例 3

```text
head = [1,2]
n = 1
输出 = [1]
```

### 约束与训练提示

- 链表中结点的数目为 sz
- 1 <= sz <= 30
- 0 <= Node.val <= 100
- 1 <= n <= sz
- 需要正确处理被删除节点是头节点的情况。
- 哑节点可以统一删除逻辑。

### 本题测试

```bash
npm run test:problem -- 19
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-13
- 结果：独立重新写出两次遍历解法
- 用时：
- 提交次数：
- 核心模型：先计算长度，把倒数位置换算成正数位置，再找到前驱节点删除
- 核心不变量：第二次遍历的 `temp` 最终停在待删除节点的前驱
- 时间复杂度：O(n)
- 空间复杂度：O(1)
- 错误标签：位置换算 / 计数基准 / 头节点边界
- 最小反例：`[1,2]` 分别令 `n=1` 和 `n=2`，验证删除尾节点和头节点
- D+1：2026-08-14，闭卷写出 `func3` 并解释 `target = length - n`
- D+3：2026-08-16，使用哑节点重写两次遍历方案
- D+7：2026-08-20，使用哑节点闭卷写出一次遍历的快慢指针方案
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
