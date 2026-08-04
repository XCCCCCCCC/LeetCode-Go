// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 39,
  title: "组合总和",
  solutionFile: path.join(__dirname, "组合总和.js"),
  entryName: "combinationSum_func1",
  meta: {
    "name": "combinationSum",
    "params": [
      {
        "name": "candidates",
        "type": "integer[]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "return": {
      "type": "list<list<integer>>",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "candidates": [
          2,
          3,
          6,
          7
        ],
        "target": 7
      },
      "expected": [
        [
          2,
          2,
          3
        ],
        [
          7
        ]
      ]
    },
    {
      "input": {
        "candidates": [
          2,
          3,
          5
        ],
        "target": 8
      },
      "expected": [
        [
          2,
          2,
          2,
          2
        ],
        [
          2,
          3,
          3
        ],
        [
          3,
          5
        ]
      ]
    },
    {
      "input": {
        "candidates": [
          2
        ],
        "target": 1
      },
      "expected": []
    }
  ],
})
