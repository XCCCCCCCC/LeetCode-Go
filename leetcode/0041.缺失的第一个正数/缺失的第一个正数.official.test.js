// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 41,
  title: "缺失的第一个正数",
  solutionFile: path.join(__dirname, "缺失的第一个正数.js"),
  entryName: "firstMissingPositive_func2",
  meta: {
    "name": "firstMissingPositive",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          2,
          0
        ]
      },
      "expected": 3
    },
    {
      "input": {
        "nums": [
          3,
          4,
          -1,
          1
        ]
      },
      "expected": 2
    },
    {
      "input": {
        "nums": [
          7,
          8,
          9,
          11,
          12
        ]
      },
      "expected": 1
    }
  ],
})
