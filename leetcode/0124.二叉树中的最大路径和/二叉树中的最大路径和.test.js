// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 124,
  title: "二叉树中的最大路径和",
  solutionFile: path.join(__dirname, "二叉树中的最大路径和.js"),
  entryName: "maxPathSum",
  meta: {
    "name": "maxPathSum",
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
          3
        ]
      },
      "expected": 6
    },
    {
      "input": {
        "root": [
          -10,
          9,
          20,
          null,
          null,
          15,
          7
        ]
      },
      "expected": 42
    }
  ],
})
