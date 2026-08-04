// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 25,
  title: "K 个一组翻转链表",
  solutionFile: path.join(__dirname, "K个一组翻转链表.js"),
  entryName: "reverseKGroup",
  meta: {
    "name": "reverseKGroup",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "return": {
      "type": "ListNode"
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
        "k": 2
      },
      "expected": [
        2,
        1,
        4,
        3,
        5
      ]
    },
    {
      "input": {
        "head": [
          1,
          2,
          3,
          4,
          5
        ],
        "k": 3
      },
      "expected": [
        3,
        2,
        1,
        4,
        5
      ]
    }
  ],
})
