// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 98,
  title: "验证二叉搜索树",
  solutionFile: path.join(__dirname, "验证二叉搜索树.js"),
  entryName: "isValidBST",
  meta: {
    "name": "isValidBST",
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
          2,
          1,
          3
        ]
      },
      "expected": true
    },
    {
      "input": {
        "root": [
          5,
          1,
          4,
          null,
          null,
          3,
          6
        ]
      },
      "expected": false
    }
  ],
})
