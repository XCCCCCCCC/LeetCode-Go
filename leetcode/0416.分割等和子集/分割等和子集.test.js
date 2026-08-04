// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 416,
  title: "分割等和子集",
  solutionFile: path.join(__dirname, "分割等和子集.js"),
  entryName: "canPartition",
  meta: {
    "name": "canPartition",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          5,
          11,
          5
        ]
      },
      "expected": true
    },
    {
      "input": {
        "nums": [
          1,
          2,
          3,
          5
        ]
      },
      "expected": false
    }
  ],
})
