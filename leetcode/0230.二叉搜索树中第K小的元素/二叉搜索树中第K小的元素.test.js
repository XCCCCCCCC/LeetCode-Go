// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 230,
  title: "二叉搜索树中第 K 小的元素",
  solutionFile: path.join(__dirname, "二叉搜索树中第K小的元素.js"),
  entryName: "kthSmallest",
  meta: {
    "name": "kthSmallest",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      },
      {
        "name": "k",
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
          3,
          1,
          4,
          null,
          2
        ],
        "k": 1
      },
      "expected": 1
    },
    {
      "input": {
        "root": [
          5,
          3,
          6,
          2,
          4,
          null,
          null,
          1
        ],
        "k": 3
      },
      "expected": 3
    }
  ],
})
