// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 206,
  title: "反转链表",
  solutionFile: path.join(__dirname, "反转链表.js"),
  entryName: "reverseList",
  meta: {
    "name": "reverseList",
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
          1,
          2,
          3,
          4,
          5
        ]
      },
      "expected": [
        5,
        4,
        3,
        2,
        1
      ]
    },
    {
      "input": {
        "head": [
          1,
          2
        ]
      },
      "expected": [
        2,
        1
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
