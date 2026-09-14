<!-- top150-meta:start -->
> Top Interview 150 · 滑动窗口 · 中等 · 已有代码
> [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) · 标签：哈希表 / 字符串 / 滑动窗口
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 滑动窗口 · 中等 · 已有代码与测试
> [3. 无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/) · 标签：哈希表 / 字符串 / 滑动窗口
<!-- hot100-meta:end -->

# [无重复字符的最长子串](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)

给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

示例1：
```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

示例2：
```
输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
```

示例3：
```
输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
```

## 解题思路
**思路1**：暴力解法，两层for循环逐个匹配最长的子串。时间复杂度为O(n^2)

**思路2**：比较好的思想“滑动窗口”。只要没有出现重复的字符，就持续扩大窗口，当出现重复字符时，重制窗口的左边界至第一个重复的字符移出。时间复杂度O(n)。

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

求不包含重复字符的最长连续子串长度。

### 官方示例

#### 示例 1

```text
s = "abcabcbb"
输出 = 3
```

#### 示例 2

```text
s = "bbbbb"
输出 = 1
```

#### 示例 3

```text
s = "pwwkew"
输出 = 3
```

### 约束与训练提示

- 0 <= s.length <= 10^5
- s 由英文字母、数字、符号和空格组成
- 子串必须在原字符串中连续。
- 重复字符出现时需要移动左边界。

### 本题测试

```bash
npm run test:problem -- 3
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
