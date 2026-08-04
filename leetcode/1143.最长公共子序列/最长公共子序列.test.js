// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 1143,
  title: "最长公共子序列",
  solutionFile: path.join(__dirname, "最长公共子序列.js"),
  entryName: "longestCommonSubsequence",
  meta: {
    "name": "longestCommonSubsequence",
    "params": [
      {
        "name": "text1",
        "type": "string"
      },
      {
        "type": "string",
        "name": "text2"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "text1": "abcde",
        "text2": "ace"
      },
      "expected": 3
    },
    {
      "input": {
        "text1": "abc",
        "text2": "abc"
      },
      "expected": 3
    },
    {
      "input": {
        "text1": "abc",
        "text2": "def"
      },
      "expected": 0
    }
  ],
})
