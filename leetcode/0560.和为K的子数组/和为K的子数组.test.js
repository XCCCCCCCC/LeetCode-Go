// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 560,
  title: "和为 K 的子数组",
  solutionFile: path.join(__dirname, "和为K的子数组.js"),
  entryName: "subarraySum",
  meta: {
    "name": "subarraySum",
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
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          1,
          1,
          1
        ],
        "k": 2
      },
      "expected": 2
    },
    {
      "input": {
        "nums": [
          1,
          2,
          3
        ],
        "k": 3
      },
      "expected": 2
    }
  ],
})
