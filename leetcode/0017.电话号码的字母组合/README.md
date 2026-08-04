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
**思路1**：

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
