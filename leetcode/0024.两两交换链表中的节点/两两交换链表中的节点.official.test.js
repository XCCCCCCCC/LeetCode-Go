// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 24,
  title: "两两交换链表中的节点",
  solutionFile: path.join(__dirname, "两两交换链表中的节点.js"),
  entryName: "swapPairs_func1",
  meta: {
    "name": "swapPairs",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
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
          4
        ]
      },
      "expected": [
        2,
        1,
        4,
        3
      ]
    },
    {
      "input": {
        "head": []
      },
      "expected": []
    },
    {
      "input": {
        "head": [
          1
        ]
      },
      "expected": [
        1
      ]
    }
  ],
})
