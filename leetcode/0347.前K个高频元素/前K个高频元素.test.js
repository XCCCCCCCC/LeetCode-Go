// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 347,
  title: "前 K 个高频元素",
  solutionFile: path.join(__dirname, "前K个高频元素.js"),
  entryName: "topKFrequent",
  meta: {
    "name": "topKFrequent",
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
      "type": "integer[]"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          1,
          1,
          2,
          2,
          3
        ],
        "k": 2
      },
      "expected": [
        1,
        2
      ]
    },
    {
      "input": {
        "nums": [
          1
        ],
        "k": 1
      },
      "expected": [
        1
      ]
    },
    {
      "input": {
        "nums": [
          1,
          2,
          1,
          2,
          1,
          2,
          3,
          1,
          3,
          2
        ],
        "k": 2
      },
      "expected": [
        1,
        2
      ]
    }
  ],
})
