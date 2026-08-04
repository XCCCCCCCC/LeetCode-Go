// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 56,
  title: "合并区间",
  solutionFile: path.join(__dirname, "合并区间.js"),
  entryName: "merge",
  meta: {
    "name": "merge",
    "params": [
      {
        "name": "intervals",
        "type": "integer[][]"
      }
    ],
    "return": {
      "type": "integer[][]"
    }
  },
  examples: [
    {
      "input": {
        "intervals": [
          [
            1,
            3
          ],
          [
            2,
            6
          ],
          [
            8,
            10
          ],
          [
            15,
            18
          ]
        ]
      },
      "expected": [
        [
          1,
          6
        ],
        [
          8,
          10
        ],
        [
          15,
          18
        ]
      ]
    },
    {
      "input": {
        "intervals": [
          [
            1,
            4
          ],
          [
            4,
            5
          ]
        ]
      },
      "expected": [
        [
          1,
          5
        ]
      ]
    },
    {
      "input": {
        "intervals": [
          [
            4,
            7
          ],
          [
            1,
            4
          ]
        ]
      },
      "expected": [
        [
          1,
          7
        ]
      ]
    }
  ],
})
