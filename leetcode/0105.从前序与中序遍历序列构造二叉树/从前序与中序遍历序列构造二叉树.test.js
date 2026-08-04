// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 105,
  title: "从前序与中序遍历序列构造二叉树",
  solutionFile: path.join(__dirname, "从前序与中序遍历序列构造二叉树.js"),
  entryName: "buildTree",
  meta: {
    "name": "buildTree",
    "params": [
      {
        "name": "preorder",
        "type": "integer[]"
      },
      {
        "name": "inorder",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "TreeNode",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "preorder": [
          3,
          9,
          20,
          15,
          7
        ],
        "inorder": [
          9,
          3,
          15,
          20,
          7
        ]
      },
      "expected": [
        3,
        9,
        20,
        null,
        null,
        15,
        7
      ]
    },
    {
      "input": {
        "preorder": [
          -1
        ],
        "inorder": [
          -1
        ]
      },
      "expected": [
        -1
      ]
    }
  ],
})
