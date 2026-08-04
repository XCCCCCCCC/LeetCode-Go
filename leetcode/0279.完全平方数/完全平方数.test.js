// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 279,
  title: "完全平方数",
  solutionFile: path.join(__dirname, "完全平方数.js"),
  entryName: "numSquares",
  meta: {
    "name": "numSquares",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "n": 12
      },
      "expected": 3
    },
    {
      "input": {
        "n": 13
      },
      "expected": 2
    }
  ],
})
