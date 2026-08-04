// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 53,
  title: "最大子数组和",
  solutionFile: path.join(__dirname, "最大子数组和.js"),
  entryName: "maxSubArray",
  meta: {
    "name": "maxSubArray",
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
          -2,
          1,
          -3,
          4,
          -1,
          2,
          1,
          -5,
          4
        ]
      },
      "expected": 6
    },
    {
      "input": {
        "nums": [
          1
        ]
      },
      "expected": 1
    },
    {
      "input": {
        "nums": [
          5,
          4,
          -1,
          7,
          8
        ]
      },
      "expected": 23
    }
  ],
})
