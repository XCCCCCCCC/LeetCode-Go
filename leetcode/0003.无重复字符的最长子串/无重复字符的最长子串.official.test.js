// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 3,
  title: "无重复字符的最长子串",
  solutionFile: path.join(__dirname, "无重复字符的最长子串.js"),
  entryName: "lengthOfLongestSubString_func2",
  meta: {
    "name": "lengthOfLongestSubstring",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "s": "abcabcbb"
      },
      "expected": 3
    },
    {
      "input": {
        "s": "bbbbb"
      },
      "expected": 1
    },
    {
      "input": {
        "s": "pwwkew"
      },
      "expected": 3
    }
  ],
})
