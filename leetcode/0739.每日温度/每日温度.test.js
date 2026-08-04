// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 739,
  title: "每日温度",
  solutionFile: path.join(__dirname, "每日温度.js"),
  entryName: "dailyTemperatures",
  meta: {
    "name": "dailyTemperatures",
    "params": [
      {
        "name": "temperatures",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "integer[]"
    }
  },
  examples: [
    {
      "input": {
        "temperatures": [
          73,
          74,
          75,
          71,
          69,
          72,
          76,
          73
        ]
      },
      "expected": [
        1,
        1,
        4,
        2,
        1,
        1,
        0,
        0
      ]
    },
    {
      "input": {
        "temperatures": [
          30,
          40,
          50,
          60
        ]
      },
      "expected": [
        1,
        1,
        1,
        0
      ]
    },
    {
      "input": {
        "temperatures": [
          30,
          60,
          90
        ]
      },
      "expected": [
        1,
        1,
        0
      ]
    }
  ],
})
