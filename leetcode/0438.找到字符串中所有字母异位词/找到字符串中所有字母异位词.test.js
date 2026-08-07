// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 438,
  title: "找到字符串中所有字母异位词",
  solutionFile: path.join(__dirname, "找到字符串中所有字母异位词.js"),
  entryName: "findAnagrams_func2",
  meta: {
    "name": "findAnagrams_func2",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "p",
        "type": "string"
      }
    ],
    "return": {
      "type": "list<integer>"
    }
  },
  examples: [
    {
      "input": {
        "s": "cbaebabacd",
        "p": "abc"
      },
      "expected": [
        0,
        6
      ]
    },
    {
      "input": {
        "s": "abab",
        "p": "ab"
      },
      "expected": [
        0,
        1,
        2
      ]
    }
  ],
})
