// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 234,
  title: "回文链表",
  solutionFile: path.join(__dirname, "回文链表.js"),
  entryName: "isPalindrome",
  meta: {
    "name": "isPalindrome",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
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
          1,
          2,
          2,
          1
        ]
      },
      "expected": true
    },
    {
      "input": {
        "head": [
          1,
          2
        ]
      },
      "expected": false
    }
  ],
})
