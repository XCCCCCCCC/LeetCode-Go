// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 207,
  title: "课程表",
  solutionFile: path.join(__dirname, "课程表.js"),
  entryName: "canFinish",
  meta: {
    "name": "canFinish",
    "params": [
      {
        "name": "numCourses",
        "type": "integer"
      },
      {
        "name": "prerequisites",
        "type": "integer[][]"
      }
    ],
    "return": {
      "type": "boolean"
    }
  },
  examples: [
    {
      "input": {
        "numCourses": 2,
        "prerequisites": [
          [
            1,
            0
          ]
        ]
      },
      "expected": true
    },
    {
      "input": {
        "numCourses": 2,
        "prerequisites": [
          [
            1,
            0
          ],
          [
            0,
            1
          ]
        ]
      },
      "expected": false
    }
  ],
})
