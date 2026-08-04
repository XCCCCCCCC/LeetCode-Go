// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 45,
  title: "跳跃游戏 II",
  solutionFile: path.join(__dirname, "跳跃游戏Ⅱ.js"),
  entryName: "jump_func1",
  meta: {
    "name": "jump",
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
          2,
          3,
          1,
          1,
          4
        ]
      },
      "expected": 2
    },
    {
      "input": {
        "nums": [
          2,
          3,
          0,
          1,
          4
        ]
      },
      "expected": 2
    }
  ],
})
