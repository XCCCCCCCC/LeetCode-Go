// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 72,
  title: "编辑距离",
  solutionFile: path.join(__dirname, "编辑距离.js"),
  entryName: "minDistance",
  meta: {
    "name": "minDistance",
    "params": [
      {
        "name": "word1",
        "type": "string"
      },
      {
        "name": "word2",
        "type": "string"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "word1": "horse",
        "word2": "ros"
      },
      "expected": 3
    },
    {
      "input": {
        "word1": "intention",
        "word2": "execution"
      },
      "expected": 5
    }
  ],
})
