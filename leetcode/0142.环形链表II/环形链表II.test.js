// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 142,
  title: "环形链表 II",
  solutionFile: path.join(__dirname, "环形链表II.js"),
  entryName: "detectCycle",
  meta: {
    "name": "detectCycle",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      },
      {
        "name": "pos",
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
          3,
          2,
          0,
          -4
        ],
        "pos": 1
      },
      "expected": 1
    },
    {
      "input": {
        "head": [
          1,
          2
        ],
        "pos": 0
      },
      "expected": 0
    },
    {
      "input": {
        "head": [
          1
        ],
        "pos": -1
      },
      "expected": null
    }
  ],
})
