<!-- top150-meta:start -->
> Top Interview 150 · 多维动态规划 · 中等 · 已有代码
> [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/) · 标签：双指针 / 字符串 / 动态规划 / Manacher 算法
<!-- top150-meta:end -->

<!-- hot100-meta:start -->
> Hot 100 · 多维动态规划 · 中等 · 已有代码与测试
> [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/) · 标签：双指针 / 字符串 / 动态规划 / Manacher 算法
<!-- hot100-meta:end -->

# [最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

给你一个字符串 s，找到 s 中最长的回文子串。

示例1：
```
输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
```

示例2：
```
输入：s = "cbbd"
输出："bb"
```

## 解题思路
**思路1**：暴力解法，列出所有子串判断，时间复杂度O(n^3)。
**思路2**：扩散中心法，两种场景判断，形如`bab`或`bb`，即偶数或奇数两种回文子串类型，如左右相等则继续向两侧扩散，直至不想等为止，时间复杂度O(n^2)

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

返回字符串中最长的回文连续子串。

### 官方示例

#### 示例 1

```text
s = "babad"
输出 = "bab"
```

#### 示例 2

```text
s = "cbbd"
输出 = "bb"
```

### 约束与训练提示

- 1 <= s.length <= 1000
- s 仅由数字和英文字母组成
- 若有多个同长答案，返回任意一个即可。
- 需同时考虑奇数长度和偶数长度回文中心。

### 本题测试

```bash
npm run test:problem -- 5
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
