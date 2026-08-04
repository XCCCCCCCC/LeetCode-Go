// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 108,
  title: "将有序数组转换为二叉搜索树",
  solutionFile: path.join(__dirname, "将有序数组转换为二叉搜索树.js"),
  entryName: "sortedArrayToBST",
  meta: {
    "name": "sortedArrayToBST",
    "params": [
      {
        "name": "nums",
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
        "nums": [
          -10,
          -3,
          0,
          5,
          9
        ]
      },
      "expected": [
        0,
        -3,
        9,
        -10,
        null,
        5
      ]
    },
    {
      "input": {
        "nums": [
          1,
          3
        ]
      },
      "expected": [
        3,
        1
      ]
    }
  ],
})
