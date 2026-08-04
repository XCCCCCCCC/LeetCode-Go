// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 46,
  title: "全排列",
  solutionFile: path.join(__dirname, "全排列.js"),
  entryName: "permute_func1",
  meta: {
    "name": "permute",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "list<list<integer>>",
      "colsize": "size_1",
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
        [
          1,
          2,
          3
        ],
        [
          1,
          3,
          2
        ],
        [
          2,
          1,
          3
        ],
        [
          2,
          3,
          1
        ],
        [
          3,
          1,
          2
        ],
        [
          3,
          2,
          1
        ]
      ]
    },
    {
      "input": {
        "nums": [
          0,
          1
        ]
      },
      "expected": [
        [
          0,
          1
        ],
        [
          1,
          0
        ]
      ]
    },
    {
      "input": {
        "nums": [
          1
        ]
      },
      "expected": [
        [
          1
        ]
      ]
    }
  ],
})
