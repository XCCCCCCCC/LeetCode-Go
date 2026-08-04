// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 226,
  title: "翻转二叉树",
  solutionFile: path.join(__dirname, "翻转二叉树.js"),
  entryName: "invertTree",
  meta: {
    "name": "invertTree",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
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
          4,
          2,
          7,
          1,
          3,
          6,
          9
        ]
      },
      "expected": [
        4,
        7,
        2,
        9,
        6,
        3,
        1
      ]
    },
    {
      "input": {
        "root": [
          2,
          1,
          3
        ]
      },
      "expected": [
        2,
        3,
        1
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
