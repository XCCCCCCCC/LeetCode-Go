// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 48,
  title: "旋转图像",
  solutionFile: path.join(__dirname, "旋转图像.js"),
  entryName: "rotate",
  meta: {
    "name": "rotate",
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
        [
          7,
          4,
          1
        ],
        [
          8,
          5,
          2
        ],
        [
          9,
          6,
          3
        ]
      ]
    },
    {
      "input": {
        "matrix": [
          [
            5,
            1,
            9,
            11
          ],
          [
            2,
            4,
            8,
            10
          ],
          [
            13,
            3,
            6,
            7
          ],
          [
            15,
            14,
            12,
            16
          ]
        ]
      },
      "expected": [
        [
          15,
          13,
          2,
          5
        ],
        [
          14,
          3,
          4,
          1
        ],
        [
          12,
          6,
          8,
          9
        ],
        [
          16,
          7,
          10,
          11
        ]
      ]
    }
  ],
})
