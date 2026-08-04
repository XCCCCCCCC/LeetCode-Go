// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 136,
  title: "只出现一次的数字",
  solutionFile: path.join(__dirname, "只出现一次的数字.js"),
  entryName: "singleNumber",
  meta: {
    "name": "singleNumber",
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
          2,
          1
        ]
      },
      "expected": 1
    },
    {
      "input": {
        "nums": [
          4,
          1,
          2,
          1,
          2
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          1
        ]
      },
      "expected": 1
    }
  ],
})
