// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 394,
  title: "字符串解码",
  solutionFile: path.join(__dirname, "字符串解码.js"),
  entryName: "decodeString",
  meta: {
    "name": "decodeString",
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
        "s": "3[a]2[bc]"
      },
      "expected": "aaabcbc"
    },
    {
      "input": {
        "s": "3[a2[c]]"
      },
      "expected": "accaccacc"
    },
    {
      "input": {
        "s": "2[abc]3[cd]ef"
      },
      "expected": "abcabccdcdcdef"
    },
    {
      "input": {
        "s": "abc3[cd]xyz"
      },
      "expected": "abccdcdcdxyz"
    }
  ],
})
