// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 153,
  title: "寻找旋转排序数组中的最小值",
  solutionFile: path.join(__dirname, "寻找旋转排序数组中的最小值.js"),
  entryName: "findMin",
  meta: {
    "name": "findMin",
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
          3,
          4,
          5,
          1,
          2
        ]
      },
      "expected": 1
    },
    {
      "input": {
        "nums": [
          4,
          5,
          6,
          7,
          0,
          1,
          2
        ]
      },
      "expected": 0
    },
    {
      "input": {
        "nums": [
          11,
          13,
          15,
          17
        ]
      },
      "expected": 11
    }
  ],
})
