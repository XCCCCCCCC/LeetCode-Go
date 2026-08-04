// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 84,
  title: "柱状图中最大的矩形",
  solutionFile: path.join(__dirname, "柱状图中最大的矩形.js"),
  entryName: "largestRectangleArea",
  meta: {
    "name": "largestRectangleArea",
    "params": [
      {
        "name": "heights",
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
        "heights": [
          2,
          1,
          5,
          6,
          2,
          3
        ]
      },
      "expected": 10
    },
    {
      "input": {
        "heights": [
          2,
          4
        ]
      },
      "expected": 4
    }
  ],
})
