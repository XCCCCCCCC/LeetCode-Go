// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 152,
  title: "乘积最大子数组",
  solutionFile: path.join(__dirname, "乘积最大子数组.js"),
  entryName: "maxProduct",
  meta: {
    "name": "maxProduct",
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
          2,
          3,
          -2,
          4
        ]
      },
      "expected": 6
    },
    {
      "input": {
        "nums": [
          -2,
          0,
          -1
        ]
      },
      "expected": 0
    }
  ],
})
