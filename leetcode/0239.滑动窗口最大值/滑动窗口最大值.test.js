// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 239,
  title: "滑动窗口最大值",
  solutionFile: path.join(__dirname, "滑动窗口最大值.js"),
  entryName: "maxSlidingWindow",
  meta: {
    "name": "maxSlidingWindow",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "return": {
      "type": "integer[]"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          3,
          -1,
          -3,
          5,
          3,
          6,
          7
        ],
        "k": 3
      },
      "expected": [
        3,
        3,
        5,
        5,
        6,
        7
      ]
    },
    {
      "input": {
        "nums": [
          1
        ],
        "k": 1
      },
      "expected": [
        1
      ]
    }
  ],
})
