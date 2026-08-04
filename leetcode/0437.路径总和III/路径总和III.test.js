// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 437,
  title: "路径总和 III",
  solutionFile: path.join(__dirname, "路径总和III.js"),
  entryName: "pathSum",
  meta: {
    "name": "pathSum",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "targetSum",
        "type": "integer"
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
          10,
          5,
          -3,
          3,
          2,
          null,
          11,
          3,
          -2,
          null,
          1
        ],
        "targetSum": 8
      },
      "expected": 3
    },
    {
      "input": {
        "root": [
          5,
          4,
          8,
          11,
          null,
          13,
          4,
          7,
          2,
          null,
          null,
          5,
          1
        ],
        "targetSum": 22
      },
      "expected": 3
    }
  ],
})
