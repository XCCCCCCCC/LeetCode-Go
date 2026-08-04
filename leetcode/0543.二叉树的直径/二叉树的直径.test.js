// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 543,
  title: "二叉树的直径",
  solutionFile: path.join(__dirname, "二叉树的直径.js"),
  entryName: "diameterOfBinaryTree",
  meta: {
    "name": "diameterOfBinaryTree",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "root": [
          1,
          2,
          3,
          4,
          5
        ]
      },
      "expected": 3
    },
    {
      "input": {
        "root": [
          1,
          2
        ]
      },
      "expected": 1
    }
  ],
})
