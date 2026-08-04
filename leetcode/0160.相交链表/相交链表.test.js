// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 160,
  title: "相交链表",
  solutionFile: path.join(__dirname, "相交链表.js"),
  entryName: "getIntersectionNode",
  meta: {
    "name": "getIntersectionNode",
    "params": [
      {
        "name": "intersectVal",
        "type": "integer"
      },
      {
        "name": "listA",
        "type": "ListNode"
      },
      {
        "name": "listB",
        "type": "ListNode"
      },
      {
        "name": "skipA",
        "type": "integer"
      },
      {
        "name": "skipB",
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
        "intersectVal": 8,
        "listA": [
          4,
          1,
          8,
          4,
          5
        ],
        "listB": [
          5,
          6,
          1,
          8,
          4,
          5
        ],
        "skipA": 2,
        "skipB": 3
      },
      "expected": 8
    },
    {
      "input": {
        "intersectVal": 2,
        "listA": [
          1,
          9,
          1,
          2,
          4
        ],
        "listB": [
          3,
          2,
          4
        ],
        "skipA": 3,
        "skipB": 1
      },
      "expected": 2
    },
    {
      "input": {
        "intersectVal": 0,
        "listA": [
          2,
          6,
          4
        ],
        "listB": [
          1,
          5
        ],
        "skipA": 3,
        "skipB": 2
      },
      "expected": null
    }
  ],
})
