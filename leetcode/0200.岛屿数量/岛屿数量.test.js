// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 200,
  title: "岛屿数量",
  solutionFile: path.join(__dirname, "岛屿数量.js"),
  entryName: "numIslands",
  meta: {
    "name": "numIslands",
    "params": [
      {
        "name": "grid",
        "type": "character[][]"
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
            "1",
            "1",
            "1",
            "1",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "1",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "0",
            "0",
            "0"
          ]
        ]
      },
      "expected": 1
    },
    {
      "input": {
        "grid": [
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "1",
            "1",
            "0",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "1",
            "0",
            "0"
          ],
          [
            "0",
            "0",
            "0",
            "1",
            "1"
          ]
        ]
      },
      "expected": 3
    }
  ],
})
