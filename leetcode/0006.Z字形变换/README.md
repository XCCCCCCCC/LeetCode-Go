# [Z字形变换](https://leetcode.cn/problems/zigzag-conversion/)
将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：
```
P   A   H   N
A P L S I I G
Y   I   R
```
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：
```
string convert(string s, int numRows);
```

示例1：
```
输入：s = "PAYPALISHIRING", numRows = 3
输出："PAHNAPLSIIGYIR"
```

示例2：
```
输入：s = "PAYPALISHIRING", numRows = 4
输出："PINALSIGYAHRPI"
解释：
P     I    N
A   L S  I G
Y A   H R
P     I
```

示例3：
```
输入：s = "A", numRows = 1
输出："A"
```

## 解题思路
**思路1**：二维数组，循环判断之后重新横向组合输出，时间复杂度O(n^2)。

**思路2**：观察输出，Z字形特征是向下向上反复循环直至数组结尾，为上下的长度就是numRows。利用一个方向标志`down`控制方向，`loc`控制数组下标，`down`为`true`时，`loc+=1`，`down`为`false`时`loc+=-1`，时间复杂度O(n)。