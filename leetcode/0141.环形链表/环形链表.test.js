// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 141,
  title: "环形链表",
  solutionFile: path.join(__dirname, "环形链表.js"),
  entryName: "hasCycle",
  meta: {
    "name": "hasCycle",
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
      "type": "boolean"
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
      "expected": true
    },
    {
      "input": {
        "head": [
          1,
          2
        ],
        "pos": 0
      },
      "expected": true
    },
    {
      "input": {
        "head": [
          1
        ],
        "pos": -1
      },
      "expected": false
    }
  ],
})
