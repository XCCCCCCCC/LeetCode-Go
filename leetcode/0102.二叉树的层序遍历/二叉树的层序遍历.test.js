// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 102,
  title: "二叉树的层序遍历",
  solutionFile: path.join(__dirname, "二叉树的层序遍历.js"),
  entryName: "levelOrder",
  meta: {
    "name": "levelOrder",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "list<list<integer>>",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "root": [
          3,
          9,
          20,
          null,
          null,
          15,
          7
        ]
      },
      "expected": [
        [
          3
        ],
        [
          9,
          20
        ],
        [
          15,
          7
        ]
      ]
    },
    {
      "input": {
        "root": [
          1
        ]
      },
      "expected": [
        [
          1
        ]
      ]
    },
    {
      "input": {
        "root": []
      },
      "expected": []
    }
  ],
})
