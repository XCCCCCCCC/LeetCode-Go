// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 94,
  title: "二叉树的中序遍历",
  solutionFile: path.join(__dirname, "二叉树的中序遍历.js"),
  entryName: "inorderTraversal",
  meta: {
    "name": "inorderTraversal",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "list<integer>",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "root": [
          1,
          null,
          2,
          3
        ]
      },
      "expected": [
        1,
        3,
        2
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
          1
        ]
      },
      "expected": [
        1
      ]
    }
  ],
})
