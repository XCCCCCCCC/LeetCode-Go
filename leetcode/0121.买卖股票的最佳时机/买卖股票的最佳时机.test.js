// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 121,
  title: "买卖股票的最佳时机",
  solutionFile: path.join(__dirname, "买卖股票的最佳时机.js"),
  entryName: "maxProfit",
  meta: {
    "name": "maxProfit",
    "params": [
      {
        "name": "prices",
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
        "prices": [
          7,
          1,
          5,
          3,
          6,
          4
        ]
      },
      "expected": 5
    },
    {
      "input": {
        "prices": [
          7,
          6,
          4,
          3,
          1
        ]
      },
      "expected": 0
    }
  ],
})
