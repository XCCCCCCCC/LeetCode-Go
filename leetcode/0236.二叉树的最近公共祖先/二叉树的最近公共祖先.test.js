// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 236,
  title: "二叉树的最近公共祖先",
  solutionFile: path.join(__dirname, "二叉树的最近公共祖先.js"),
  entryName: "lowestCommonAncestor",
  meta: {
    "name": "lowestCommonAncestor",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "p",
        "type": "integer"
      },
      {
        "name": "q",
        "type": "integer"
      }
    ],
    "return": {
      "type": "TreeNode"
    }
  },
  examples: [
    {
      "input": {
        "root": [
          3,
          5,
          1,
          6,
          2,
          0,
          8,
          null,
          null,
          7,
          4
        ],
        "p": 5,
        "q": 1
      },
      "expected": 3
    },
    {
      "input": {
        "root": [
          3,
          5,
          1,
          6,
          2,
          0,
          8,
          null,
          null,
          7,
          4
        ],
        "p": 5,
        "q": 4
      },
      "expected": 5
    },
    {
      "input": {
        "root": [
          1,
          2
        ],
        "p": 1,
        "q": 2
      },
      "expected": 1
    }
  ],
})
