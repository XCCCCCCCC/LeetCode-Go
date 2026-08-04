// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 300,
  title: "最长递增子序列",
  solutionFile: path.join(__dirname, "最长递增子序列.js"),
  entryName: "lengthOfLIS",
  meta: {
    "name": "lengthOfLIS",
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
          10,
          9,
          2,
          5,
          3,
          7,
          101,
          18
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          0,
          1,
          0,
          3,
          2,
          3
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          7,
          7,
          7,
          7,
          7,
          7,
          7
        ]
      },
      "expected": 1
    }
  ],
})
