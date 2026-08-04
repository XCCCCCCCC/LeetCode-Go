// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 31,
  title: "下一个排列",
  solutionFile: path.join(__dirname, "下一个排列.js"),
  entryName: "nextPermutation_func1",
  meta: {
    "name": "nextPermutation",
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
          1,
          2,
          3
        ]
      },
      "expected": [
        1,
        3,
        2
      ]
    },
    {
      "input": {
        "nums": [
          3,
          2,
          1
        ]
      },
      "expected": [
        1,
        2,
        3
      ]
    },
    {
      "input": {
        "nums": [
          1,
          1,
          5
        ]
      },
      "expected": [
        1,
        5,
        1
      ]
    }
  ],
})
