// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 32,
  title: "最长有效括号",
  solutionFile: path.join(__dirname, "最长有效括号.js"),
  entryName: "longestValidParentheses_func2",
  meta: {
    "name": "longestValidParentheses",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "s": "(()"
      },
      "expected": 2
    },
    {
      "input": {
        "s": ")()())"
      },
      "expected": 4
    },
    {
      "input": {
        "s": ""
      },
      "expected": 0
    }
  ],
})
