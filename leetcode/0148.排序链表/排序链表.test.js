// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 148,
  title: "排序链表",
  solutionFile: path.join(__dirname, "排序链表.js"),
  entryName: "sortList",
  meta: {
    "name": "sortList",
    "params": [
      {
        "name": "head",
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
        "head": [
          4,
          2,
          1,
          3
        ]
      },
      "expected": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "input": {
        "head": [
          -1,
          5,
          3,
          4,
          0
        ]
      },
      "expected": [
        -1,
        0,
        3,
        4,
        5
      ]
    },
    {
      "input": {
        "head": []
      },
      "expected": []
    }
  ],
})
