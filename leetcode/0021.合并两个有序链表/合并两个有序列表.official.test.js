// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 21,
  title: "合并两个有序链表",
  solutionFile: path.join(__dirname, "合并两个有序列表.js"),
  entryName: "mergeTwoLists_func1",
  meta: {
    "name": "mergeTwoLists",
    "params": [
      {
        "name": "list1",
        "type": "ListNode",
        "dealloc": false
      },
      {
        "name": "list2",
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
          1,
          2,
          4
        ],
        "l2": [
          1,
          3,
          4
        ],
        "list1": [
          1,
          2,
          4
        ],
        "list2": [
          1,
          3,
          4
        ]
      },
      "expected": [
        1,
        1,
        2,
        3,
        4,
        4
      ]
    },
    {
      "input": {
        "l1": [],
        "l2": [],
        "list1": [],
        "list2": []
      },
      "expected": []
    },
    {
      "input": {
        "l1": [],
        "l2": [
          0
        ],
        "list1": [],
        "list2": [
          0
        ]
      },
      "expected": [
        0
      ]
    }
  ],
})
