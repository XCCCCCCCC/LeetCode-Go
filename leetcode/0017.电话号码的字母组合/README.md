<!-- hot100-meta:start -->
> Hot 100 · 回溯 · 中等 · 已有代码与测试
> [17. 电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/) · 标签：哈希表 / 字符串 / 回溯
<!-- hot100-meta:end -->

# [电话号码的字母组合](https://leetcode.cn/problems/letter-combinations-of-a-phone-number/)

给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例1：
```
输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

示例2：
```
输入：digits = ""
输出：[]
```

示例3：
```
输入：digits = "2"
输出：["a","b","c"]
```

## 解题思路

## Hot100 机考速用版

17 题仍然是回溯，但它和 46 全排列的“选择来源”不同：

```text
46：每一层从 nums 中选择一个还没有使用的数字
17：每一层只处理 digits 中的一个数字，从这个数字对应的字母中选择一个
```

例如 `digits = "23"`：

```text
第 0 位数字是 2，可以选 a / b / c
第 1 位数字是 3，可以选 d / e / f
```

一条路径的构造过程是：

```text
选择 a → 选择 d → 得到 "ad"
选择 a → 选择 e → 得到 "ae"
选择 a → 选择 f → 得到 "af"
选择 b → ……
```

### 这道题的五个回溯问题

```text
path：当前已经拼出的字母，例如 ['a']
choice：当前 digits[index] 对应的所有字母
invalid：本题没有额外非法选择，每个字母都可以尝试
finish：index === digits.length，所有数字都处理完
restore：删除刚刚加入 path 的字母
```

这里的 `index` 是最重要的状态：

```text
index = 0：正在处理 digits[0]
index = 1：正在处理 digits[1]
index = 2：正在处理 digits[2]
```

不要用 `temp.length` 代替 `index` 来理解流程。真正决定“应该读取哪个数字映射”的是 `index`。

### 推荐写法

```js
var letterCombinations = function (digits) {
  if (digits.length === 0) {
    return []
  }

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const result = []
  const path = []

  const backtrack = (index) => {
    if (index === digits.length) {
      result.push(path.join(''))
      return
    }

    const letters = map[digits[index]]
    for (const letter of letters) {
      path.push(letter)
      backtrack(index + 1)
      path.pop()
    }
  }

  backtrack(0)
  return result
}
```

执行顺序固定记成：

```text
检查 index 是否处理完；
取当前数字对应的字母；
逐个尝试这些字母；
递归处理下一个数字；
返回后撤销当前字母。
```

### 你当前 `func2` 的问题

1. 外层循环条件 `i > digits.length` 方向写反，而且这里不需要外层循环；递归负责处理下一位数字。
2. `backTrack` 应接收数字下标 `index`，而不是当前字母字符串 `letters`。
3. 递归应该传 `backTrack(index + 1)`，不能一直传同一组 `letters`。
4. `nums` 未定义，17 题也不需要 `includes`；不同数字可以选择相同字母，例如 `"22"` 的 `"aa"` 合法。
5. 结果要求字符串，应保存 `path.join('')`，而不是直接保存 `temp` 数组。

### 边界为什么是 `index === digits.length`

每次递归只处理一个数字：

```text
backtrack(0)：处理 digits[0]
backtrack(1)：处理 digits[1]
backtrack(2)：处理 digits[2]
```

当 `index === digits.length` 时，说明所有数字都已经各自选择了一个字母，当前路径就是完整组合。

例如 `"23"`：

```text
path = ['a']       index = 1
path = ['a', 'd']  index = 2
```

此时 `2 === digits.length`，保存 `"ad"`，然后返回上一层撤销 `d`，继续尝试 `e`、`f`。

### 空输入必须单独处理

题目规定：

```text
digits = "" → []
```

如果直接调用 `backtrack(0)`，`index === digits.length` 会立即成立，通用逻辑会得到 `[""]`。因此需要在回溯开始前返回空数组：

```js
if (digits.length === 0) {
  return []
}
```

这是题目约定的边界，不能只依赖通用回溯模板。

### 和 46、78 的边界对比

| 题目 | 每层选择 | 完成条件 | 保存答案时机 |
|---|---|---|---|
| 46 全排列 | 所有未使用数字 | `path.length === nums.length` | 填满后保存 |
| 78 子集 | `start` 右侧数字 | 没有必须填满的长度 | 每次进入递归都保存 |
| 17 电话字母 | `digits[index]` 对应字母 | `index === digits.length` | 所有数字处理完后保存 |

三题都使用：

```text
做选择 → 递归 → 撤销选择
```

但“当前选择”和“何时算完成”不同。先问“一个完整答案需要完成什么”，就能更容易写出边界。

### 复杂度

设每位平均有 `k` 个候选字母，输入长度为 `n`：

```text
组合数量：O(k^n)
时间复杂度：O(n × k^n)
结果空间：O(n × k^n)
额外回溯空间：O(n)
```

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

根据电话键盘上数字与字母的对应关系，返回输入数字串可表示的所有字母组合。

### 官方示例

#### 示例 1

```text
digits = "23"
输出 = ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

#### 示例 2

```text
digits = "2"
输出 = ["a","b","c"]
```

### 约束与训练提示

- 1 <= digits.length <= 4
- digits[i] 是范围 ['2', '9'] 的一个数字。
- 空输入应返回空结果。
- 每一位数字都必须选择一个对应字母。

### 本题测试

```bash
npm run test:problem -- 17
```
<!-- hot100-problem:end -->

<!-- hot100-training:start -->
## 训练复盘

- 训练日期：2026-08-14
- 结果：正在尝试 `func2`，递归状态和边界尚未理顺
- 用时：
- 提交次数：
- 核心模型：每层处理 `digits[index]`，从对应字母中选择一个，递归处理下一位
- 核心不变量：进入 `backtrack(index)` 时，`path` 已经包含前 `index` 位数字各选出的一个字母
- 时间复杂度：O(n×k^n)
- 空间复杂度：额外 O(n)，结果 O(n×k^n)
- 错误标签：递归状态 / 选择来源 / 终止条件 / 空输入边界
- 最小反例：`digits = "2"` 应返回 `['a','b','c']`；`digits = ""` 应返回 `[]`
- D+1：2026-08-15，闭卷写出 `index` 版本并解释 `index + 1`
- D+3：2026-08-17，手动跟踪 `"23"` 得到 `ad、ae、af`
- D+7：2026-08-21，对比 17、46、78 三题的 path、choice、finish
<!-- hot100-training:end -->
