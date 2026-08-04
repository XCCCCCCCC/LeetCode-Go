// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 240,
  title: "搜索二维矩阵 II",
  solutionFile: path.join(__dirname, "搜索二维矩阵II.js"),
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
            4,
            7,
            11,
            15
          ],
          [
            2,
            5,
            8,
            12,
            19
          ],
          [
            3,
            6,
            9,
            16,
            22
          ],
          [
            10,
            13,
            14,
            17,
            24
          ],
          [
            18,
            21,
            23,
            26,
            30
          ]
        ],
        "target": 5
      },
      "expected": true
    },
    {
      "input": {
        "matrix": [
          [
            1,
            4,
            7,
            11,
            15
          ],
          [
            2,
            5,
            8,
            12,
            19
          ],
          [
            3,
            6,
            9,
            16,
            22
          ],
          [
            10,
            13,
            14,
            17,
            24
          ],
          [
            18,
            21,
            23,
            26,
            30
          ]
        ],
        "target": 20
      },
      "expected": false
    }
  ],
})
