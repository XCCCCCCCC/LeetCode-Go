// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 238,
  title: "除了自身以外数组的乘积",
  solutionFile: path.join(__dirname, "除了自身以外数组的乘积.js"),
  entryName: "productExceptSelf",
  meta: {
    "name": "productExceptSelf",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
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
          2,
          3,
          4
        ]
      },
      "expected": [
        24,
        12,
        8,
        6
      ]
    },
    {
      "input": {
        "nums": [
          -1,
          1,
          0,
          -3,
          3
        ]
      },
      "expected": [
        0,
        0,
        9,
        0,
        0
      ]
    }
  ],
})
