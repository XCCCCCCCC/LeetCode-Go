// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 322,
  title: "零钱兑换",
  solutionFile: path.join(__dirname, "零钱兑换.js"),
  entryName: "coinChange",
  meta: {
    "name": "coinChange",
    "params": [
      {
        "name": "coins",
        "type": "integer[]"
      },
      {
        "name": "amount",
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
        "coins": [
          1,
          2,
          5
        ],
        "amount": 11
      },
      "expected": 3
    },
    {
      "input": {
        "coins": [
          2
        ],
        "amount": 3
      },
      "expected": -1
    },
    {
      "input": {
        "coins": [
          1
        ],
        "amount": 0
      },
      "expected": 0
    }
  ],
})
