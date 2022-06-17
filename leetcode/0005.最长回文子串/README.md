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