// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 287,
  title: "寻找重复数",
  solutionFile: path.join(__dirname, "寻找重复数.js"),
  entryName: "findDuplicate",
  meta: {
    "name": "findDuplicate",
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
          3,
          4,
          2,
          2
        ]
      },
      "expected": 2
    },
    {
      "input": {
        "nums": [
          3,
          1,
          3,
          4,
          2
        ]
      },
      "expected": 3
    },
    {
      "input": {
        "nums": [
          3,
          3,
          3,
          3,
          3
        ]
      },
      "expected": 3
    }
  ],
})
