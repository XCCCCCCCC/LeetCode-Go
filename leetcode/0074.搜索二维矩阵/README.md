<!-- hot100-meta:start -->
> Hot 100 · 二分查找 · 中等 · 未开始
> [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/) · 标签：数组 / 二分查找 / 矩阵
<!-- hot100-meta:end -->

# [74. 搜索二维矩阵](https://leetcode.cn/problems/search-a-2d-matrix/)

## 解题思路

### 当前方案是否正规

当前思路是正规的两段二分：

```text
第一次二分：确定 target 可能位于哪一行
第二次二分：在这一行中查找 target
```

因为题目保证：

```text
每一行内部升序；
下一行第一个元素大于上一行最后一个元素。
```

所以每一行的最后一个元素也是严格递增的，可以先对“每行末尾”进行二分。

### 已修复的问题：重复声明同名函数

初版代码曾在外层函数中又声明一个同名函数：

```js
var searchMatrix = function (matrix, target) {
  var searchMatrix = function (matrix, target) {
    // 真正的搜索逻辑
  }
}
```

这会导致外层函数既没有调用内部函数，也没有返回搜索结果，真正入口只能返回 `undefined`。

当前代码已经删除重复包装，只保留一层函数：

```js
var searchMatrix = function (matrix, target) {
  // 两段二分逻辑
}
```

修复后，官方示例测试已经全部通过。这个问题属于函数作用域和返回流程错误，不是二分算法错误。

### 第一段二分：寻找候选行

第一段比较：

```js
const rowLast = matrix[mid][matrix[mid].length - 1]
```

如果当前行最后一个元素仍小于 `target`：

```js
left = mid + 1
```

说明这一行以及前面的行都不可能包含目标。

否则：

```js
right = mid - 1
```

继续向左寻找更早满足条件的行。

循环结束后，`left` 表示：

> 第一行“行末元素大于或等于 target”的行。

因此：

```js
const row = matrix[left]
```

如果 `left === matrix.length`，说明所有行末元素都小于 `target`，目标一定不存在。

### 第二段二分：在候选行中查找

找到候选行以后，使用 35 的标准闭区间模板：

```js
let left = 0
let right = row.length - 1

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2)

  if (row[mid] === target) return true

  if (row[mid] < target) {
    left = mid + 1
  } else {
    right = mid - 1
  }
}

return false
```

你的两段二分复杂度为：

```text
时间复杂度：O(log m + log n)，等价于 O(log(mn))
空间复杂度：O(1)
```

### 更常见的写法：虚拟一维数组

因为下一行首元素大于上一行末元素，整个矩阵按行展开后是一个完整的升序数组：

```text
1  3  5  7
10 11 16 20
23 30 34 60

展开：[1,3,5,7,10,11,16,20,23,30,34,60]
```

不需要真的创建新数组，只需要把一维下标 `mid` 映射回矩阵：

```js
const row = Math.floor(mid / columns)
const col = mid % columns
const value = matrix[row][col]
```

完整结构：

```js
var searchMatrix = function (matrix, target) {
  const rows = matrix.length
  const columns = matrix[0].length
  let left = 0
  let right = rows * columns - 1

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const row = Math.floor(mid / columns)
    const col = mid % columns
    const value = matrix[row][col]

    if (value === target) {
      return true
    }

    if (value < target) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
}
```

这属于更典型的 74 写法，但并不代表两段二分不正规。两种方案都满足题目要求。

### 两种方案对比

| 方案 | 思考方式 | 复杂度 |
|---|---|---|
| 两段二分 | 先找候选行，再在行内查找 | O(log m + log n) |
| 虚拟一维二分 | 把矩阵看成长度 `m×n` 的升序数组 | O(log(mn)) |

数学上：

```text
log m + log n = log(mn)
```

所以两者的渐进时间复杂度相同。

## 边界条件

- `target` 小于矩阵第一个元素：候选行是第一行，行内二分返回 false。
- `target` 大于矩阵最后一个元素：第一段结束后 `left === matrix.length`，返回 false。
- 单行矩阵：第一段定位第一行，第二段正常二分。
- 单列矩阵：两段二分仍然成立。
- `target` 位于每行第一个或最后一个元素：边界必须能正确命中。
- 题目保证矩阵非空；通用代码可额外判断空矩阵。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

在每行升序且下一行首元素大于上一行末元素的矩阵中查找目标值。

### 官方示例

#### 示例 1

```text
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3
输出 = true
```

#### 示例 2

```text
matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 13
输出 = false
```

### 约束与训练提示

- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 100
- -10^4 <= matrix[i][j], target <= 10^4
- 可将矩阵视为一个虚拟升序一维数组。
- 需通过整除和取模将一维下标还原为行列。

### 本题测试

```bash
npm run test:problem -- 74
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-17
- 结果：独立写出两段二分，修复函数嵌套后通过官方测试
- 用时：
- 提交次数：
- 核心模型：先寻找第一行末元素大于等于 target 的行，再在该行闭区间二分
- 核心不变量：第一段保留可能成为候选行的范围，第二段保留可能包含 target 的下标范围
- 时间复杂度：O(log m + log n)
- 空间复杂度：O(1)
- 错误标签：函数作用域 / 返回值
- 最小反例：初版对任意非空矩阵都返回 undefined；修复后可正确查找
- D+1：2026-08-18，闭卷复写两段二分，并解释第一段结束后 `left` 的含义
- D+3：2026-08-20，闭卷写出虚拟一维下标映射
- D+7：2026-08-24，对比两段二分与一次二分的区间含义
<!-- hot100-training:end -->
