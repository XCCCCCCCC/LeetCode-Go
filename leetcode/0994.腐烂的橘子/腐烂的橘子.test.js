// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 994,
  title: "腐烂的橘子",
  solutionFile: path.join(__dirname, "腐烂的橘子.js"),
  entryName: "orangesRotting",
  meta: {
    "name": "orangesRotting",
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
            2,
            1,
            1
          ],
          [
            1,
            1,
            0
          ],
          [
            0,
            1,
            1
          ]
        ]
      },
      "expected": 4
    },
    {
      "input": {
        "grid": [
          [
            2,
            1,
            1
          ],
          [
            0,
            1,
            1
          ],
          [
            1,
            0,
            1
          ]
        ]
      },
      "expected": -1
    },
    {
      "input": {
        "grid": [
          [
            0,
            2
          ]
        ]
      },
      "expected": 0
    }
  ],
})
