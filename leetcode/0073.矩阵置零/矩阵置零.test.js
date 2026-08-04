// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 73,
  title: "矩阵置零",
  solutionFile: path.join(__dirname, "矩阵置零.js"),
  entryName: "setZeroes",
  meta: {
    "name": "setZeroes",
    "params": [
      {
        "name": "matrix",
        "type": "integer[][]"
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
        "matrix": [
          [
            1,
            1,
            1
          ],
          [
            1,
            0,
            1
          ],
          [
            1,
            1,
            1
          ]
        ]
      },
      "expected": [
        [
          1,
          0,
          1
        ],
        [
          0,
          0,
          0
        ],
        [
          1,
          0,
          1
        ]
      ]
    },
    {
      "input": {
        "matrix": [
          [
            0,
            1,
            2,
            0
          ],
          [
            3,
            4,
            5,
            2
          ],
          [
            1,
            3,
            1,
            5
          ]
        ]
      },
      "expected": [
        [
          0,
          0,
          0,
          0
        ],
        [
          0,
          4,
          5,
          0
        ],
        [
          0,
          3,
          1,
          0
        ]
      ]
    }
  ],
})
