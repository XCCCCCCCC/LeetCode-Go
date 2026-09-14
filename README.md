# LeetCode-Go

> 当前实际训练语言为 JavaScript。仓库名称保留历史命名，不影响本地运行。

## Hot 100 入口

- [Hot 100 训练索引](HOT100.md)
- [时间复杂度与空间复杂度小白课件](COMPLEXITY.md)
- 官方源：[LeetCode 热题 100](https://leetcode.cn/studyplan/top-100-liked/)
- 本地题单数据：`hot100.json`

## 经典面试 150 入口

- [经典面试 150 训练索引](TOP_INTERVIEW_150.md)
- 官方源：[LeetCode 经典面试 150 题](https://leetcode.cn/studyplan/top-interview-150/)
- 本地题单数据：`top-interview-150.json`

重新从力扣官方同步经典面试 150 题单并补齐缺失目录：

```bash
npm run sync:top150
```

同步会复用已有题目目录；已有解法和测试不会被覆盖，新题只创建练习骨架。

重新从力扣官方同步题单并补齐缺失目录：

```bash
npm run sync:hot100
```

同步脚本不会覆盖已有解法或测试；它只创建缺失文件、更新 Hot 100 元数据和训练索引。

重新从力扣官网同步示例输入和期望输出，并更新每题的本地训练版题目说明：

```bash
npm run sync:tests
```

## 目录约定

保持原有的“一题一目录”结构：

```text
leetcode/0049.字母异位词分组/
├── README.md
├── 字母异位词分组.js
└── 字母异位词分组.test.js
```

- `*.js`：只保留力扣解法和调试时需要的 `console.log`。
- `*.test.js`：本地测试用例，不复制到力扣。
- `repeat.js`：历史闭卷复写代码，暂不纳入自动测试。
- `README.md`：保留题意摘要、思路、边界和 D+1/D+3/D+7 复盘。

## 开始一道新题

1. 从 `HOT100.md` 进入题目目录。
2. 在解法文件中完成力扣官方函数骨架。
3. 删除 `TODO(hot100)` 标记。
4. 在测试文件中删除 `test.todo`，至少添加：官方示例、边界用例、最小反例。
5. 运行单题测试，再运行全量测试。
6. 更新题目 README 中的训练复盘。

## 运行测试

在仓库根目录执行全部测试：

```bash
npm test
```

只运行第 49 题：

```bash
npm run test:49
```

按题号运行任意一题（推荐）：

```bash
npm run test:problem -- 128
```

命令会自动定位 `0128.*` 目录中的全部测试文件，并强制执行该题的官方示例。未完成时看到失败是正常的；修改解法后反复运行即可。全量 `npm test` 仍会跳过带有 `TODO(hot100)` 的未开始题目。

或直接指定任意测试文件：

```bash
node --test "leetcode/0049.字母异位词分组/字母异位词分组.test.js"
```

手动测试时，在对应的 `*.test.js` 中增加 `test(...)` 用例，保存后重新执行命令。

持续监视文件变化并自动重跑：

```bash
npm run test:watch
```
