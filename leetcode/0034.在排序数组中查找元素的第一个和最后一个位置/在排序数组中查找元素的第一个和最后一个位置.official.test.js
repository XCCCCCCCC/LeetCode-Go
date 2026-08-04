// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 34,
  title: "在排序数组中查找元素的第一个和最后一个位置",
  solutionFile: path.join(__dirname, "在排序数组中查找元素的第一个和最后一个位置.js"),
  entryName: "searchRange_func2",
  meta: {
    "name": "searchRange",
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
      "type": "integer[]"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          5,
          7,
          7,
          8,
          8,
          10
        ],
        "target": 8
      },
      "expected": [
        3,
        4
      ]
    },
    {
      "input": {
        "nums": [
          5,
          7,
          7,
          8,
          8,
          10
        ],
        "target": 6
      },
      "expected": [
        -1,
        -1
      ]
    },
    {
      "input": {
        "nums": [],
        "target": 0
      },
      "expected": [
        -1,
        -1
      ]
    }
  ],
})
