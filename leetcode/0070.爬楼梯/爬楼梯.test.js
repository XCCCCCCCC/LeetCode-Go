// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 70,
  title: "爬楼梯",
  solutionFile: path.join(__dirname, "爬楼梯.js"),
  entryName: "climbStairs",
  meta: {
    "name": "climbStairs",
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
        "n": 2
      },
      "expected": 2
    },
    {
      "input": {
        "n": 3
      },
      "expected": 3
    }
  ],
})
