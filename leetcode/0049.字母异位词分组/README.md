<!-- top150-meta:start -->
> Top Interview 150 · 哈希表 · 中等 · 已有代码
> [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/) · 标签：数组 / 哈希表 / 字符串 / 排序
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 哈希 · 中等 · 已有代码与测试
> [49. 字母异位词分组](https://leetcode.cn/problems/group-anagrams/) · 标签：数组 / 哈希表 / 字符串 / 排序
<!-- hot100-meta:end -->

# [49. Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## 题目

给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

解释：

在 strs 中没有字符串可以通过重新排列来形成 "bat"。
字符串 "nat" 和 "tan" 是字母异位词，因为它们可以重新排列以形成彼此。
字符串 "ate" ，"eat" 和 "tea" 是字母异位词，因为它们可以重新排列以形成彼此。
示例 2:

输入: strs = [""]

输出: [[""]]

示例 3:

输入: strs = ["a"]

输出: [["a"]]

提示：

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] 仅包含小写字母

## 题目大意

给出一个字符串数组，要求对字符串数组里面有 Anagrams 关系的字符串进行分组。Anagrams 关系是指两个字符串的字符完全相同，顺序不同，两者是由排列组合组成。

## 解题思路

这道题可以将每个字符串都排序，排序完成以后，相同 Anagrams 的字符串必然排序结果一样。把排序以后的字符串当做 key 存入到 map 中。遍历数组以后，就能得到一个 map，key 是排序以后的字符串，value 对应的是这个排序字符串以后的 Anagrams 字符串集合。最后再将这些 value 对应的字符串数组输出即可。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

将由同一组字符重新排列而成的字符串归入同一组。

### 官方示例

#### 示例 1

```text
strs = ["eat","tea","tan","ate","nat","bat"]
输出 = [["bat"],["nat","tan"],["ate","eat","tea"]]
```

#### 示例 2

```text
strs = [""]
输出 = [[""]]
```

#### 示例 3

```text
strs = ["a"]
输出 = [["a"]]
```

### 约束与训练提示

- 1 <= strs.length <= 10^4
- 0 <= strs[i].length <= 100
- strs[i] 仅包含小写字母
- 分组之间的顺序不做要求。
- 需要为每个字符串构造稳定的分组标识。

### 本题测试

```bash
npm run test:problem -- 49
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
