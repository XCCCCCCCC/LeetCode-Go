<!-- hot100-meta:start -->
> Hot 100 · 图论 · 中等 · 未开始
> [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/) · 标签：设计 / 字典树 / 哈希表 / 字符串
<!-- hot100-meta:end -->

# [208. 实现 Trie (前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/)

## 解题思路

- 暴力解法：
- 优化方向：
- 核心不变量：

## 边界条件

-

<!-- hot100-problem:start -->
## 题目说明（本地训练版）

实现前缀树，支持插入单词、完整单词查询和前缀查询。

### 官方示例

#### 示例 1

```text
operations = ["Trie","insert","search","search","startsWith","insert","search"]
arguments = [[],["apple"],["apple"],["app"],["app"],["app"],["app"]]
输出 = [null,null,true,false,true,null,true]
```

### 约束与训练提示

- 1 <= word.length, prefix.length <= 2000
- word 和 prefix 仅由小写英文字母组成
- insert、search 和 startsWith 调用次数 总计 不超过 3 * 10^4 次
- 需要区分“路径存在”与“完整单词在此结束”。
- 每个节点保存后继字符映射和结束标记。

### 本题测试

```bash
npm run test:problem -- 208
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
