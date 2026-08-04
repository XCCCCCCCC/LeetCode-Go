// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 295,
  title: "数据流的中位数",
  solutionFile: path.join(__dirname, "数据流的中位数.js"),
  entryName: "MedianFinder",
  meta: {
    "classname": "MedianFinder",
    "constructor": {
      "params": []
    },
    "methods": [
      {
        "params": [
          {
            "type": "integer",
            "name": "num"
          }
        ],
        "name": "addNum",
        "return": {
          "type": "void"
        }
      },
      {
        "params": [],
        "name": "findMedian",
        "return": {
          "type": "double"
        }
      }
    ],
    "return": {
      "type": "boolean"
    },
    "systemdesign": true
  },
  examples: [
    {
      "input": {
        "operations": [
          "MedianFinder",
          "addNum",
          "addNum",
          "findMedian",
          "addNum",
          "findMedian"
        ],
        "arguments": [
          [],
          [
            1
          ],
          [
            2
          ],
          [],
          [
            3
          ],
          []
        ]
      },
      "expected": [
        null,
        null,
        null,
        1.5,
        null,
        2
      ]
    }
  ],
})
