// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 2,
  title: "两数相加",
  solutionFile: path.join(__dirname, "两数相加.js"),
  entryName: "addTwoNumbers_func2",
  meta: {
    "name": "addTwoNumbers",
    "params": [
      {
        "name": "l1",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "l2",
        "type": "ListNode",
        "dealloc": false
      }
    ],
    "return": {
      "type": "ListNode",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "l1": [
          2,
          4,
          3
        ],
        "l2": [
          5,
          6,
          4
        ]
      },
      "expected": [
        7,
        0,
        8
      ]
    },
    {
      "input": {
        "l1": [
          0
        ],
        "l2": [
          0
        ]
      },
      "expected": [
        0
      ]
    },
    {
      "input": {
        "l1": [
          9,
          9,
          9,
          9,
          9,
          9,
          9
        ],
        "l2": [
          9,
          9,
          9,
          9
        ]
      },
      "expected": [
        8,
        9,
        9,
        9,
        0,
        0,
        0,
        1
      ]
    }
  ],
})
