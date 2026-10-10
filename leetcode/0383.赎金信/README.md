<!-- top150-meta:start -->
> Top Interview 150 · 哈希表 · 简单 · 独立通过
> [383. 赎金信](https://leetcode.cn/problems/ransom-note/) · 标签：哈希表 / 字符串 / 计数
<!-- top150-meta:end -->

# [383. 赎金信](https://leetcode.cn/problems/ransom-note/)

## 解题思路

题目要求判断 `magazine` 中的字符能不能组成 `ransomNote`。每个字符只能使用一次，所以需要统计字符数量，不能只判断字符是否出现过。

先遍历 `magazine`，建立字符计数表：

```js
for (const c of magazine) {
  if (cnt[c]) {
    cnt[c]++
  } else {
    cnt[c] = 1
  }
}
```

再遍历 `ransomNote`，每使用一个字符，就把对应数量减一：

```js
for (const c of ransomNote) {
  if (cnt[c] === undefined) {
    return false
  }
  cnt[c]--
}
```

最后检查是否出现负数。如果某个计数小于 0，说明 `ransomNote` 需要的字符数量超过了 `magazine` 的库存，返回 `false`；全部非负则返回 `true`。

当前代码的完整流程是：

```text
magazine 建立库存
ransomNote 逐个取用库存
字符不存在时立即失败
遍历完成后检查是否有库存被取成负数
```

例如：

```text
ransomNote = "aa"
magazine   = "aab"

统计后：a = 2，b = 1
取用两个 a 后：a = 0
没有计数变成负数，返回 true
```

也可以在取用时直接判断 `cnt[c] === 0` 并立即返回 `false`，这样就不需要最后再遍历 `Object.values(cnt)`。

## 边界条件

- `ransomNote` 为空字符串时，不需要任何字符，返回 `true`。
- `magazine` 中字符种类足够，但数量不足时必须返回 `false`，例如 `"aaa"` 和 `"aa"`。
- 字符的使用次数必须逐次扣减，不能只用 `includes` 判断是否存在。
- 当前题目字符范围较小，使用对象统计即可；如果限定为小写英文字母，也可以使用长度为 26 的数组。

<!-- top150-training:start -->
## 面试 150 训练复盘

- 训练日期：2026-09-21
- 结果：独立通过
- 用时：
- 提交次数：
- 核心模型：哈希表字符计数
- 核心不变量：处理 `ransomNote` 的过程中，`cnt[c]` 表示 `magazine` 中尚未被使用的字符数量
- 时间复杂度：`O(m + n)`，`m` 和 `n` 分别为两个字符串长度
- 空间复杂度：`O(k)`，`k` 为 `magazine` 中不同字符的数量
- 错误标签：
- 最小反例：`"aa"` / `"ab"`、`"aaa"` / `"aa"`、空 `ransomNote`
<!-- top150-training:end -->
