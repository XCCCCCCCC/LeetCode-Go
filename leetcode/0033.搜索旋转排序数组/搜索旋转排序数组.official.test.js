// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 33,
  title: "搜索旋转排序数组",
  solutionFile: path.join(__dirname, "搜索旋转排序数组.js"),
  entryName: "search_func2",
  meta: {
    "name": "search",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "target",
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
        "nums": [
          4,
          5,
          6,
          7,
          0,
          1,
          2
        ],
        "target": 0
      },
      "expected": 4
    },
    {
      "input": {
        "nums": [
          4,
          5,
          6,
          7,
          0,
          1,
          2
        ],
        "target": 3
      },
      "expected": -1
    },
    {
      "input": {
        "nums": [
          1
        ],
        "target": 0
      },
      "expected": -1
    }
  ],
})
