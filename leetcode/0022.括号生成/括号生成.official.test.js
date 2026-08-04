// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 22,
  title: "括号生成",
  solutionFile: path.join(__dirname, "括号生成.js"),
  entryName: "generateParenthesis_func1",
  meta: {
    "name": "generateParenthesis",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "return": {
      "type": "list<string>"
    }
  },
  examples: [
    {
      "input": {
        "n": 3
      },
      "expected": [
        "((()))",
        "(()())",
        "(())()",
        "()(())",
        "()()()"
      ]
    },
    {
      "input": {
        "n": 1
      },
      "expected": [
        "()"
      ]
    }
  ],
})
