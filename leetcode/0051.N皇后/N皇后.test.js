// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 51,
  title: "N 皇后",
  solutionFile: path.join(__dirname, "N皇后.js"),
  entryName: "solveNQueens",
  meta: {
    "name": "solveNQueens",
    "params": [
      {
        "name": "n",
        "type": "integer"
      }
    ],
    "return": {
      "type": "list<list<string>>",
      "colsize": "param_1",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "n": 4
      },
      "expected": [
        [
          ".Q..",
          "...Q",
          "Q...",
          "..Q."
        ],
        [
          "..Q.",
          "Q...",
          "...Q",
          ".Q.."
        ]
      ]
    },
    {
      "input": {
        "n": 1
      },
      "expected": [
        [
          "Q"
        ]
      ]
    }
  ],
})
