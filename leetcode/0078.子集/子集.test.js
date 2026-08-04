// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 78,
  title: "子集",
  solutionFile: path.join(__dirname, "子集.js"),
  entryName: "subsets",
  meta: {
    "name": "subsets",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
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
        "nums": [
          1,
          2,
          3
        ]
      },
      "expected": [
        [],
        [
          1
        ],
        [
          2
        ],
        [
          1,
          2
        ],
        [
          3
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          2,
          3
        ]
      ]
    },
    {
      "input": {
        "nums": [
          0
        ]
      },
      "expected": [
        [],
        [
          0
        ]
      ]
    }
  ],
})
