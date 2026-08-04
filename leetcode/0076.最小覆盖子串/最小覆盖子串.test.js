// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 76,
  title: "最小覆盖子串",
  solutionFile: path.join(__dirname, "最小覆盖子串.js"),
  entryName: "minWindow",
  meta: {
    "name": "minWindow",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "t",
        "type": "string"
      }
    ],
    "return": {
      "type": "string"
    }
  },
  examples: [
    {
      "input": {
        "s": "ADOBECODEBANC",
        "t": "ABC"
      },
      "expected": "BANC"
    },
    {
      "input": {
        "s": "a",
        "t": "a"
      },
      "expected": "a"
    },
    {
      "input": {
        "s": "a",
        "t": "aa"
      },
      "expected": ""
    }
  ],
})
