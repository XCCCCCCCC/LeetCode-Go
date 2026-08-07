// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 15,
  title: "三数之和",
  solutionFile: path.join(__dirname, "三数之和.js"),
  entryName: "threeSum_func3",
  meta: {
    "name": "threeSum",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "list<list<integer>>",
      "colsize": 3,
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          -1,
          0,
          1,
          2,
          -1,
          -4
        ]
      },
      "expected": [
        [
          -1,
          -1,
          2
        ],
        [
          -1,
          0,
          1
        ]
      ]
    },
    {
      "input": {
        "nums": [
          0,
          1,
          1
        ]
      },
      "expected": []
    },
    {
      "input": {
        "nums": [
          0,
          0,
          0
        ]
      },
      "expected": [
        [
          0,
          0,
          0
        ]
      ]
    }
  ],
})
