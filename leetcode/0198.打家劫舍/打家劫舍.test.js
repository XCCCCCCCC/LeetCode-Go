// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 198,
  title: "打家劫舍",
  solutionFile: path.join(__dirname, "打家劫舍.js"),
  entryName: "rob",
  meta: {
    "name": "rob",
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
          3,
          1
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          2,
          7,
          9,
          3,
          1
        ]
      },
      "expected": 12
    }
  ],
})
