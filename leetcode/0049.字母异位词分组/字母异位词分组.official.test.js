// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 49,
  title: "字母异位词分组",
  solutionFile: path.join(__dirname, "字母异位词分组.js"),
  entryName: "groupAnagrams2",
  meta: {
    "name": "groupAnagrams",
    "params": [
      {
        "name": "strs",
        "type": "string[]"
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
        "strs": [
          "eat",
          "tea",
          "tan",
          "ate",
          "nat",
          "bat"
        ]
      },
      "expected": [
        [
          "bat"
        ],
        [
          "nat",
          "tan"
        ],
        [
          "ate",
          "eat",
          "tea"
        ]
      ]
    },
    {
      "input": {
        "strs": [
          ""
        ]
      },
      "expected": [
        [
          ""
        ]
      ]
    },
    {
      "input": {
        "strs": [
          "a"
        ]
      },
      "expected": [
        [
          "a"
        ]
      ]
    }
  ],
})
