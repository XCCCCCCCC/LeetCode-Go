// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 118,
  title: "杨辉三角",
  solutionFile: path.join(__dirname, "杨辉三角.js"),
  entryName: "generate",
  meta: {
    "name": "generate",
    "params": [
      {
        "name": "numRows",
        "type": "integer"
      }
    ],
    "return": {
      "type": "list<list<integer>>",
      "dealloc": true,
      "rowsize": "param_1"
    }
  },
  examples: [
    {
      "input": {
        "numRows": 5
      },
      "expected": [
        [
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2,
          1
        ],
        [
          1,
          3,
          3,
          1
        ],
        [
          1,
          4,
          6,
          4,
          1
        ]
      ]
    },
    {
      "input": {
        "numRows": 1
      },
      "expected": [
        [
          1
        ]
      ]
    }
  ],
})
