// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 1,
  title: "两数之和",
  solutionFile: path.join(__dirname, "两数之和.js"),
  entryName: "twoSun_func2",
  meta: {
    "name": "twoSum",
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
      "type": "integer[]",
      "size": 2
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          2,
          7,
          11,
          15
        ],
        "target": 9
      },
      "expected": [
        0,
        1
      ]
    },
    {
      "input": {
        "nums": [
          3,
          2,
          4
        ],
        "target": 6
      },
      "expected": [
        1,
        2
      ]
    },
    {
      "input": {
        "nums": [
          3,
          3
        ],
        "target": 6
      },
      "expected": [
        0,
        1
      ]
    }
  ],
})
