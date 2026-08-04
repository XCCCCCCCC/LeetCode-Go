// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 101,
  title: "对称二叉树",
  solutionFile: path.join(__dirname, "对称二叉树.js"),
  entryName: "isSymmetric",
  meta: {
    "name": "isSymmetric",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "root": [
          1,
          2,
          2,
          3,
          4,
          4,
          3
        ]
      },
      "expected": true
    },
    {
      "input": {
        "root": [
          1,
          2,
          2,
          null,
          3,
          null,
          3
        ]
      },
      "expected": false
    }
  ],
})
