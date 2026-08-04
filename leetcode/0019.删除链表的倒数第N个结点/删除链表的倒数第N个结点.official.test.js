// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 19,
  title: "删除链表的倒数第 N 个结点",
  solutionFile: path.join(__dirname, "删除链表的倒数第N个结点.js"),
  entryName: "removeNthFromEnd_func1",
  meta: {
    "name": "removeNthFromEnd",
    "params": [
      {
        "name": "head",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "n",
        "type": "integer"
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
        ],
        "n": 2
      },
      "expected": [
        1,
        2,
        3,
        5
      ]
    },
    {
      "input": {
        "head": [
          1
        ],
        "n": 1
      },
      "expected": []
    },
    {
      "input": {
        "head": [
          1,
          2
        ],
        "n": 1
      },
      "expected": [
        1
      ]
    }
  ],
})
