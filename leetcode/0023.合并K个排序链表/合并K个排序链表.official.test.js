// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 23,
  title: "合并 K 个升序链表",
  solutionFile: path.join(__dirname, "合并K个排序链表.js"),
  entryName: "mergeKLists",
  meta: {
    "name": "mergeKLists",
    "params": [
      {
        "name": "lists",
        "type": "ListNode[]",
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
        "lists": [
          [
            1,
            4,
            5
          ],
          [
            1,
            3,
            4
          ],
          [
            2,
            6
          ]
        ]
      },
      "expected": [
        1,
        1,
        2,
        3,
        4,
        4,
        5,
        6
      ]
    },
    {
      "input": {
        "lists": []
      },
      "expected": []
    },
    {
      "input": {
        "lists": [
          []
        ]
      },
      "expected": []
    }
  ],
})
