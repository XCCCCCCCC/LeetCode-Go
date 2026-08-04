// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 283,
  title: "移动零",
  solutionFile: path.join(__dirname, "移动零.js"),
  entryName: "moveZeroes",
  meta: {
    "name": "moveZeroes",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "void"
    },
    "output": {
      "paramindex": 0
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          0,
          1,
          0,
          3,
          12
        ]
      },
      "expected": [
        1,
        3,
        12,
        0,
        0
      ]
    },
    {
      "input": {
        "nums": [
          0
        ]
      },
      "expected": [
        0
      ]
    }
  ],
})
