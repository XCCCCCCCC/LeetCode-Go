// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 128,
  title: "最长连续序列",
  solutionFile: path.join(__dirname, "最长连续序列.js"),
  entryName: "longestConsecutive2",
  meta: {
    "name": "longestConsecutive2",
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
          100,
          4,
          200,
          1,
          3,
          2
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          0,
          3,
          7,
          2,
          5,
          8,
          4,
          6,
          0,
          1
        ]
      },
      "expected": 9
    },
    {
      "input": {
        "nums": [
          1,
          0,
          1,
          2
        ]
      },
      "expected": 3
    }
  ],
})
