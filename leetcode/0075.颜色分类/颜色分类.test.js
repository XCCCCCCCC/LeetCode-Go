// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 75,
  title: "颜色分类",
  solutionFile: path.join(__dirname, "颜色分类.js"),
  entryName: "sortColors",
  meta: {
    "name": "sortColors",
    "params": [
      {
        "name": "nums",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "void"
    },
    "output": {
      "paramindex": 0
    }
  },
  examples: [
    {
      "input": {
        "nums": [
          2,
          0,
          2,
          1,
          1,
          0
        ]
      },
      "expected": [
        0,
        0,
        1,
        1,
        2,
        2
      ]
    },
    {
      "input": {
        "nums": [
          2,
          0,
          1
        ]
      },
      "expected": [
        0,
        1,
        2
      ]
    }
  ],
})
