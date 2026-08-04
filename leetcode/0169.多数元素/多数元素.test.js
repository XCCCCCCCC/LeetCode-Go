// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 169,
  title: "多数元素",
  solutionFile: path.join(__dirname, "多数元素.js"),
  entryName: "majorityElement",
  meta: {
    "name": "majorityElement",
    "params": [
      {
        "name": "nums",
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
        "nums": [
          3,
          2,
          3
        ]
      },
      "expected": 3
    },
    {
      "input": {
        "nums": [
          2,
          2,
          1,
          1,
          1,
          2,
          2
        ]
      },
      "expected": 2
    }
  ],
})
