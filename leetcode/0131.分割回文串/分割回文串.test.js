// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 131,
  title: "分割回文串",
  solutionFile: path.join(__dirname, "分割回文串.js"),
  entryName: "partition",
  meta: {
    "name": "partition",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "return": {
      "type": "list<list<string>>",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "s": "aab"
      },
      "expected": [
        [
          "a",
          "a",
          "b"
        ],
        [
          "aa",
          "b"
        ]
      ]
    },
    {
      "input": {
        "s": "a"
      },
      "expected": [
        [
          "a"
        ]
      ]
    }
  ],
})
