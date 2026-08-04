// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 20,
  title: "有效的括号",
  solutionFile: path.join(__dirname, "有效的括号.js"),
  entryName: "isValid_func1",
  meta: {
    "name": "isValid",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "s": "()"
      },
      "expected": true
    },
    {
      "input": {
        "s": "()[]{}"
      },
      "expected": true
    },
    {
      "input": {
        "s": "(]"
      },
      "expected": false
    },
    {
      "input": {
        "s": "([])"
      },
      "expected": true
    },
    {
      "input": {
        "s": "([)]"
      },
      "expected": false
    }
  ],
})
