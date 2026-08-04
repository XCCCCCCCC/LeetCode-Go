// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 54,
  title: "螺旋矩阵",
  solutionFile: path.join(__dirname, "螺旋矩阵.js"),
  entryName: "spiralOrder",
  meta: {
    "name": "spiralOrder",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
      }
    ],
    "return": {
      "type": "list<integer>",
      "size": "size_1 * col_size_1",
      "dealloc": true
    }
  },
  examples: [
    {
      "input": {
        "matrix": [
          [
            1,
            2,
            3
          ],
          [
            4,
            5,
            6
          ],
          [
            7,
            8,
            9
          ]
        ]
      },
      "expected": [
        1,
        2,
        3,
        6,
        9,
        8,
        7,
        4,
        5
      ]
    },
    {
      "input": {
        "matrix": [
          [
            1,
            2,
            3,
            4
          ],
          [
            5,
            6,
            7,
            8
          ],
          [
            9,
            10,
            11,
            12
          ]
        ]
      },
      "expected": [
        1,
        2,
        3,
        4,
        8,
        12,
        11,
        10,
        9,
        5,
        6,
        7
      ]
    }
  ],
})
