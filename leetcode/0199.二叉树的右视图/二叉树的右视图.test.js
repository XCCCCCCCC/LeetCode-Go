// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 199,
  title: "二叉树的右视图",
  solutionFile: path.join(__dirname, "二叉树的右视图.js"),
  entryName: "rightSideView",
  meta: {
    "name": "rightSideView",
    "params": [
      {
        "name": "root",
        "type": "TreeNode"
      }
    ],
    "return": {
      "type": "list<integer>",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "root": [
          1,
          2,
          3,
          null,
          5,
          null,
          4
        ]
      },
      "expected": [
        1,
        3,
        4
      ]
    },
    {
      "input": {
        "root": [
          1,
          2,
          3,
          4,
          null,
          null,
          null,
          5
        ]
      },
      "expected": [
        1,
        3,
        4,
        5
      ]
    },
    {
      "input": {
        "root": [
          1,
          null,
          3
        ]
      },
      "expected": [
        1,
        3
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
