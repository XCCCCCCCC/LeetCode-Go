// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 55,
  title: "跳跃游戏",
  solutionFile: path.join(__dirname, "跳跃游戏.js"),
  entryName: "canJump",
  meta: {
    "name": "canJump",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "boolean"
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
      "expected": true
    },
    {
      "input": {
        "nums": [
          3,
          2,
          1,
          0,
          4
        ]
      },
      "expected": false
    }
  ],
})
