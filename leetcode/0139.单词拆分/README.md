<!-- hot100-meta:start -->
> Hot 100 · 动态规划 · 中等 · 未开始
> [139. 单词拆分](https://leetcode.cn/problems/word-break/) · 标签：字典树 / 记忆化 / 数组 / 哈希表 / 字符串 / 动态规划 / Brute-Force Search
<!-- hot100-meta:end -->

# [139. 单词拆分](https://leetcode.cn/problems/word-break/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

判断字符串能否由字典中的单词拼接而成，单词可重复使用。

### 官方示例

#### 示例 1

```text
s = "leetcode"
wordDict = ["leet","code"]
输出 = true
```

#### 示例 2

```text
s = "applepenapple"
wordDict = ["apple","pen"]
输出 = true
```

#### 示例 3

```text
s = "catsandog"
wordDict = ["cats","dog","sand","and","cat"]
输出 = false
```

### 约束与训练提示

- 1 <= s.length <= 300
- 1 <= wordDict.length <= 1000
- 1 <= wordDict[i].length <= 20
- s 和 wordDict[i] 仅由小写英文字母组成
- wordDict 中的所有字符串 互不相同
- 状态可表示前 i 个字符是否可被拆分。
- 需枚举最后一个单词的开始位置。

### 本题测试

```bash
npm run test:problem -- 139
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
