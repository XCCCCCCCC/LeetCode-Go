// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 114,
  title: "二叉树展开为链表",
  solutionFile: path.join(__dirname, "二叉树展开为链表.js"),
  entryName: "flatten",
  meta: {
    "name": "flatten",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "void"
    },
    "output": {
      "paramindex": 0
    }
  },
  examples: [
    {
      "input": {
        "root": [
          1,
          2,
          5,
          3,
          4,
          null,
          6
        ]
      },
      "expected": [
        1,
        null,
        2,
        null,
        3,
        null,
        4,
        null,
        5,
        null,
        6
      ]
    },
    {
      "input": {
        "root": []
      },
      "expected": []
    },
    {
      "input": {
        "root": [
          0
        ]
      },
      "expected": [
        0
      ]
    }
  ],
})
