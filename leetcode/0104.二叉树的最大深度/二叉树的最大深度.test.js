// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 104,
  title: "二叉树的最大深度",
  solutionFile: path.join(__dirname, "二叉树的最大深度.js"),
  entryName: "maxDepth",
  meta: {
    "name": "maxDepth",
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
          3,
          9,
          20,
          null,
          null,
          15,
          7
        ]
      },
      "expected": 3
    },
    {
      "input": {
        "root": [
          1,
          null,
          2
        ]
      },
      "expected": 2
    }
  ],
})
