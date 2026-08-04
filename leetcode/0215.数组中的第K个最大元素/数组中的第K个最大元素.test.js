// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 215,
  title: "数组中的第K个最大元素",
  solutionFile: path.join(__dirname, "数组中的第K个最大元素.js"),
  entryName: "findKthLargest",
  meta: {
    "name": "findKthLargest",
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
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "k": 2,
        "nums": [
          3,
          2,
          1,
          5,
          6,
          4
        ]
      },
      "expected": 5
    },
    {
      "input": {
        "k": 4,
        "nums": [
          3,
          2,
          3,
          1,
          2,
          4,
          5,
          5,
          6
        ]
      },
      "expected": 4
    }
  ],
})
