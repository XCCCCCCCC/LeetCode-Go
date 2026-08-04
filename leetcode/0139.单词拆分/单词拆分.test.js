// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 139,
  title: "单词拆分",
  solutionFile: path.join(__dirname, "单词拆分.js"),
  entryName: "wordBreak",
  meta: {
    "name": "wordBreak",
    "params": [
      {
        "name": "s",
        "type": "string"
      },
      {
        "name": "wordDict",
        "type": "list<string>"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "s": "leetcode",
        "wordDict": [
          "leet",
          "code"
        ]
      },
      "expected": true
    },
    {
      "input": {
        "s": "applepenapple",
        "wordDict": [
          "apple",
          "pen"
        ]
      },
      "expected": true
    },
    {
      "input": {
        "s": "catsandog",
        "wordDict": [
          "cats",
          "dog",
          "sand",
          "and",
          "cat"
        ]
      },
      "expected": false
    }
  ],
})
