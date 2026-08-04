// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 189,
  title: "轮转数组",
  solutionFile: path.join(__dirname, "轮转数组.js"),
  entryName: "rotate",
  meta: {
    "name": "rotate",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      },
      {
        "name": "k",
        "type": "integer"
      }
    ],
    "return": {
      "type": "void"
    },
    "output": {
      "paramindex": 0
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          2,
          3,
          4,
          5,
          6,
          7
        ],
        "k": 3
      },
      "expected": [
        5,
        6,
        7,
        1,
        2,
        3,
        4
      ]
    },
    {
      "input": {
        "nums": [
          -1,
          -100,
          3,
          99
        ],
        "k": 2
      },
      "expected": [
        3,
        99,
        -1,
        -100
      ]
    }
  ],
})
