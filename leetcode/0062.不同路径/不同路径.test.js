// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 62,
  title: "不同路径",
  solutionFile: path.join(__dirname, "不同路径.js"),
  entryName: "uniquePaths",
  meta: {
    "name": "uniquePaths",
    "params": [
      {
        "name": "m",
        "type": "integer"
      },
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
        "m": 3,
        "n": 7
      },
      "expected": 28
    },
    {
      "input": {
        "m": 3,
        "n": 2
      },
      "expected": 3
    },
    {
      "input": {
        "m": 7,
        "n": 3
      },
      "expected": 28
    },
    {
      "input": {
        "m": 3,
        "n": 3
      },
      "expected": 6
    }
  ],
})
