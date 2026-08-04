// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 42,
  title: "接雨水",
  solutionFile: path.join(__dirname, "接雨水.js"),
  entryName: "trap_func1",
  meta: {
    "name": "trap",
    "params": [
      {
        "name": "height",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "height": [
          0,
          1,
          0,
          2,
          1,
          0,
          1,
          3,
          2,
          1,
          2,
          1
        ]
      },
      "expected": 6
    },
    {
      "input": {
        "height": [
          4,
          2,
          0,
          3,
          2,
          5
        ]
      },
      "expected": 9
    }
  ],
})
