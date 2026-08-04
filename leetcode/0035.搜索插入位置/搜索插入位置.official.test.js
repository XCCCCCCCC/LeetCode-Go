// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 35,
  title: "搜索插入位置",
  solutionFile: path.join(__dirname, "搜索插入位置.js"),
  entryName: "searchInsert_func1",
  meta: {
    "name": "searchInsert",
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
          1,
          3,
          5,
          6
        ],
        "target": 5
      },
      "expected": 2
    },
    {
      "input": {
        "nums": [
          1,
          3,
          5,
          6
        ],
        "target": 2
      },
      "expected": 1
    },
    {
      "input": {
        "nums": [
          1,
          3,
          5,
          6
        ],
        "target": 7
      },
      "expected": 4
    }
  ],
})
