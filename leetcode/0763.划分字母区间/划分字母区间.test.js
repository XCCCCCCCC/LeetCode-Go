// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 763,
  title: "划分字母区间",
  solutionFile: path.join(__dirname, "划分字母区间.js"),
  entryName: "partitionLabels",
  meta: {
    "name": "partitionLabels",
    "params": [
      {
        "name": "s",
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
        "s": "ababcbacadefegdehijhklij"
      },
      "expected": [
        9,
        7,
        8
      ]
    },
    {
      "input": {
        "s": "eccbbbbdec"
      },
      "expected": [
        10
      ]
    }
  ],
})
