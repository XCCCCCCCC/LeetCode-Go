<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 已有代码与测试
> [39. 组合总和](https://leetcode.cn/problems/combination-sum/) · 标签：数组 / 回溯
<!-- hot100-meta:end -->

# [组合总和](https://leetcode.cn/problems/combination-sum/)

给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。

示例1：
```
输入：candidates = [2,3,6,7], target = 7
输出：[[2,2,3],[7]]
解释：
2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
7 也是一个候选， 7 = 7 。
仅有这两种组合。
```

示例2：
```
输入: candidates = [2,3,5], target = 8
输出: [[2,2,2,2],[2,3,3],[3,5]]
```

示例3：
```
输入: candidates = [2], target = 1
输出: []
```

## 解题思路

## Hot100 机考速用版

39 是回溯中很容易和 78 混淆的一题。两题都要求组合不重复，但 39 额外规定：

> 同一个候选数字可以被重复选择。

因此需要同时处理两个问题：

```text
不能生成顺序重复的组合，例如 [2,3] 和 [3,2] 只能保留一个；
允许重复使用同一个数字，例如 [2,2,3] 是合法答案。
```

### 这道题的五个回溯问题

```text
path：当前已经选择的候选数字，例如 [2,2]
choice：从 start 开始的候选数字
invalid：当前剩余目标小于 0
finish：剩余目标等于 0，形成完整组合
restore：删除刚刚加入 path 的数字
```

推荐把“已经选了多少”改成“还剩多少”：

```js
backtrack(rest, start)
```

其中：

```text
rest：还需要凑出的目标和
start：本层允许选择的起始下标
```

### 最关键的选择边界：递归传 `i` 还是 `i + 1`

以 78 子集为对照：

```text
78：每个数字最多使用一次，选择 nums[i] 后传 i + 1
39：同一个数字可以重复使用，选择 candidates[i] 后传 i
```

39 的核心代码是：

```js
for (let i = start; i < candidates.length; i++) {
  path.push(candidates[i])
  backtrack(rest - candidates[i], i)
  path.pop()
}
```

为什么传 `i`？

```text
当前选择 candidates[i] 后，下一层仍然可以再次选择它。
```

为什么不能传 `0`？

如果每层都从 `0` 开始，就会生成：

```text
[2,3]
[3,2]
```

它们数值相同，只是顺序不同，题目只算一个。

所以 39 的规则是：

```text
可以重复当前数字，但不能回到当前数字左边。
```

例如候选数组 `[2,3,6,7]`：

```text
选择 2 后：下一层仍可从 2 开始 → 允许 [2,2,3]
选择 3 后：下一层只能从 3 开始 → 不会回头生成 [3,2]
```

这就是 `backtrack(..., i)` 的含义。

### 数值边界：什么时候保存，什么时候停止

把剩余目标 `rest` 作为递归状态后，边界非常固定：

```js
if (rest === 0) {
  result.push([...path])
  return
}

if (rest < 0) {
  return
}
```

通俗理解：

```text
rest === 0：刚好凑够，保存答案
rest < 0：超过目标，这条路不可能再变回目标，停止
rest > 0：还没凑够，继续选择
```

题目中的候选数字都是正数，所以一旦超过目标就不可能通过后续选择把总和降回来。

### 推荐写法

```js
var combinationSum = function (candidates, target) {
  const result = []
  const path = []

  const backtrack = (rest, start) => {
    if (rest === 0) {
      result.push([...path])
      return
    }

    for (let i = start; i < candidates.length; i++) {
      const value = candidates[i]
      if (value > rest) {
        continue
      }

      path.push(value)
      backtrack(rest - value, i)
      path.pop()
    }
  }

  backtrack(target, 0)
  return result
}
```

这里没有显式写 `rest < 0`，因为先判断：

```js
if (value > rest) continue
```

只选择不超过剩余目标的数字，就不会递归进入负数状态。两种写法都可以，机考时选自己更不容易写错的方式。

### 以 `[2,3]`、target `5` 理解边界

初始：

```text
backtrack(5, 0)
path = []
```

选择 `2`：

```text
path = [2]
backtrack(3, 0)
```

注意这里传的是 `0`，所以仍然可以再次选择 `2`。

继续选择 `2`：

```text
path = [2,2]
backtrack(1, 0)
```

此时 `2 > 1`，不能继续选 `2`；选择 `3` 也会继续判断。该分支结束后逐层 `pop`。

回到 `[2]` 后选择 `3`：

```text
path = [2,3]
rest = 0
```

保存 `[2,3]`，返回并撤销 `3`。

根层再选择 `3`：

```text
path = [3]
backtrack(2, 1)
```

下一层从下标 `1` 开始，只能继续选 `3`，不能回头选 `2`，所以不会出现 `[3,2]`。

### 你当前 `func2` 的问题

#### 1. 没有 `start`，会生成顺序重复

当前每层都从 `0` 开始：

```js
for (let i = 0; i < candidates.length; i++)
```

因此会得到：

```text
[2,3]
[3,2]
```

需要把 `start` 加入回溯参数，并让循环从 `start` 开始。

#### 2. 没有利用递归参数表示剩余目标

当前每次都重新计算：

```js
let sum = temp.reduce((item, prev) => prev += item, 0)
```

这虽然可以得到当前总和，但每次递归都要重新扫描整个 `temp`。更直接的做法是把剩余目标传下去：

```js
backTrack(rest - candidates[i], i)
```

这样每一层都能直接判断 `rest`，不需要重复计算。

#### 3. `backTrack(0)` 的参数没有被使用

当前定义：

```js
function backTrack() {
```

但调用时写了：

```js
backTrack(0)
```

这不会报错，但说明选择起点还没有真正进入状态。正确形式应类似：

```js
function backTrack(rest, start) {
}

backTrack(target, 0)
```

#### 4. `sum > target` 是有效停止条件，但可以更早剪枝

你的判断：

```js
if (sum > target) return
```

逻辑上成立，因为候选数字都是正数。但如果在加入数字前判断：

```js
if (candidates[i] > rest) continue
```

可以避免多进入一层递归，代码也更容易和“剩余目标”模型对应。

### 与 78 的边界对比

| 题目 | 是否允许重复当前元素 | 下一层起点 | 何时保存 |
|---|---:|---:|---|
| 78 子集 | 否 | `i + 1` | 每次进入递归 |
| 39 组合总和 | 是 | `i` | `rest === 0` |

机考只先记这句：

```text
不允许重复：i + 1
允许重复：i
```

但无论是否允许重复，都不能每层重新从 `0` 开始，否则组合会出现顺序重复。

### 复杂度

组合数量取决于候选数字和 target，最坏情况下可能呈指数增长。设递归深度最多为 `target / min(candidates)`：

```text
时间复杂度：与所有可行组合数量相关，最坏为指数级
额外空间复杂度：O(target / min(candidates))
结果空间：取决于返回组合数量及每个组合长度
```

本题返回所有组合，因此结果空间不能忽略。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

在候选正整数中找出所有和为目标值的不重复组合，同一数字可重复选择。

### 官方示例

#### 示例 1

```text
candidates = [2,3,6,7]
target = 7
输出 = [[2,2,3],[7]]
```

#### 示例 2

```text
candidates = [2,3,5]
target = 8
输出 = [[2,2,2,2],[2,3,3],[3,5]]
```

#### 示例 3

```text
candidates = [2]
target = 1
输出 = []
```

### 约束与训练提示

- 1 <= candidates.length <= 30
- 2 <= candidates[i] <= 40
- candidates 的所有元素 互不相同
- 1 <= target <= 40
- 组合顺序不应造成新答案。
- 当剩余目标小于零时应停止当前路径。

### 本题测试

```bash
npm run test:problem -- 39
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-14
- 结果：正在尝试 `func2`，已理解和为边界，尚未掌握 `start` 与重复选择的关系
- 用时：
- 提交次数：
- 核心模型：从 `start` 及右侧选择，达到 `rest === 0` 保存，选择当前数字后继续传 `i`
- 核心不变量：`path` 按候选数组下标非递减，`rest` 等于目标减去 path 中数字之和
- 时间复杂度：最坏指数级，取决于可行组合数量
- 空间复杂度：O(target / min(candidates))，不计结果
- 错误标签：选择范围 / 重复选择 / 剩余目标 / 剪枝
- 最小反例：`[2,3]`、`target=5`，不能同时返回 `[2,3]` 和 `[3,2]`
- D+1：2026-08-15，闭卷写出 `backtrack(rest, start)`，解释为什么传 `i`
- D+3：2026-08-17，手动跟踪 `[2,3,6,7]`、`target=7` 的 `[2,2,3]` 分支
- D+7：2026-08-21，对比 39 的 `i`、78 的 `i+1`、46 的 `used`
<!-- hot100-training:end -->
