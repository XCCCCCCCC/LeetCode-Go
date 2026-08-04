// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 79,
  title: "单词搜索",
  solutionFile: path.join(__dirname, "单词搜索.js"),
  entryName: "exist",
  meta: {
    "name": "exist",
    "params": [
      {
        "name": "board",
        "type": "character[][]"
      },
      {
        "name": "word",
        "type": "string"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "board": [
          [
            "A",
            "B",
            "C",
            "E"
          ],
          [
            "S",
            "F",
            "C",
            "S"
          ],
          [
            "A",
            "D",
            "E",
            "E"
          ]
        ],
        "word": "ABCCED"
      },
      "expected": true
    },
    {
      "input": {
        "board": [
          [
            "A",
            "B",
            "C",
            "E"
          ],
          [
            "S",
            "F",
            "C",
            "S"
          ],
          [
            "A",
            "D",
            "E",
            "E"
          ]
        ],
        "word": "SEE"
      },
      "expected": true
    },
    {
      "input": {
        "board": [
          [
            "A",
            "B",
            "C",
            "E"
          ],
          [
            "S",
            "F",
            "C",
            "S"
          ],
          [
            "A",
            "D",
            "E",
            "E"
          ]
        ],
        "word": "ABCB"
      },
      "expected": false
    }
  ],
})
