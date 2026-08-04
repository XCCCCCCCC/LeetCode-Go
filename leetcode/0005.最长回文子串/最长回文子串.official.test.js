// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 5,
  title: "最长回文子串",
  solutionFile: path.join(__dirname, "最长回文子串.js"),
  entryName: "longestPalindrome_func2",
  meta: {
    "name": "longestPalindrome",
    "params": [
      {
        "name": "s",
        "type": "string"
      }
    ],
    "return": {
      "type": "string"
    }
  },
  examples: [
    {
      "input": {
        "s": "babad"
      },
      "expected": "bab"
    },
    {
      "input": {
        "s": "cbbd"
      },
      "expected": "bb"
    }
  ],
})
