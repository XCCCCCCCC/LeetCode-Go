// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 74,
  title: "搜索二维矩阵",
  solutionFile: path.join(__dirname, "搜索二维矩阵.js"),
  entryName: "searchMatrix",
  meta: {
    "name": "searchMatrix",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      },
      {
        "name": "target",
        "type": "integer"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "matrix": [
          [
            1,
            3,
            5,
            7
          ],
          [
            10,
            11,
            16,
            20
          ],
          [
            23,
            30,
            34,
            60
          ]
        ],
        "target": 3
      },
      "expected": true
    },
    {
      "input": {
        "matrix": [
          [
            1,
            3,
            5,
            7
          ],
          [
            10,
            11,
            16,
            20
          ],
          [
            23,
            30,
            34,
            60
          ]
        ],
        "target": 13
      },
      "expected": false
    }
  ],
})
