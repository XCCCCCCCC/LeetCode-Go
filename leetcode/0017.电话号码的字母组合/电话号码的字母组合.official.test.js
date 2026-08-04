// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 17,
  title: "电话号码的字母组合",
  solutionFile: path.join(__dirname, "电话号码的字母组合.js"),
  entryName: "letterCombinations_func1",
  meta: {
    "name": "letterCombinations",
    "params": [
      {
        "name": "digits",
        "type": "string"
      }
    ],
    "return": {
      "type": "list<string>"
    }
  },
  examples: [
    {
      "input": {
        "digits": "23"
      },
      "expected": [
        "ad",
        "ae",
        "af",
        "bd",
        "be",
        "bf",
        "cd",
        "ce",
        "cf"
      ]
    },
    {
      "input": {
        "digits": "2"
      },
      "expected": [
        "a",
        "b",
        "c"
      ]
    }
  ],
})
