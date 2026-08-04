// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 64,
  title: "最小路径和",
  solutionFile: path.join(__dirname, "最小路径和.js"),
  entryName: "minPathSum",
  meta: {
    "name": "minPathSum",
    "params": [
      {
        "name": "grid",
        "type": "integer[][]"
      }
    ],
    "return": {
      "type": "integer"
    }
  },
  examples: [
    {
      "input": {
        "grid": [
          [
            1,
            3,
            1
          ],
          [
            1,
            5,
            1
          ],
          [
            4,
            2,
            1
          ]
        ]
      },
      "expected": 7
    },
    {
      "input": {
        "grid": [
          [
            1,
            2,
            3
          ],
          [
            4,
            5,
            6
          ]
        ]
      },
      "expected": 12
    }
  ],
})
