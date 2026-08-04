// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 11,
  title: "盛最多水的容器",
  solutionFile: path.join(__dirname, "盛最多水的容器.js"),
  entryName: "maxArea_func2",
  meta: {
    "name": "maxArea",
    "params": [
      {
        "name": "height",
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
        "height": [
          1,
          8,
          6,
          2,
          5,
          4,
          8,
          3,
          7
        ]
      },
      "expected": 49
    },
    {
      "input": {
        "height": [
          1,
          1
        ]
      },
      "expected": 1
    }
  ],
})
