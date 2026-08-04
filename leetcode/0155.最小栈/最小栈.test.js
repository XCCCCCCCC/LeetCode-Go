// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 155,
  title: "最小栈",
  solutionFile: path.join(__dirname, "最小栈.js"),
  entryName: "MinStack",
  meta: {
    "classname": "MinStack",
    "constructor": {
      "params": []
    },
    "methods": [
      {
        "params": [
          {
            "type": "integer",
            "name": "value"
          }
        ],
        "return": {
          "type": "void"
        },
        "name": "push"
      },
      {
        "params": [],
        "return": {
          "type": "void"
        },
        "name": "pop"
      },
      {
        "params": [],
        "return": {
          "type": "integer"
        },
        "name": "top"
      },
      {
        "params": [],
        "return": {
          "type": "integer"
        },
        "name": "getMin"
      }
    ],
    "return": {
      "type": "boolean"
    },
    "systemdesign": true
  },
  examples: [
    {
      "input": {
        "operations": [
          "MinStack",
          "push",
          "push",
          "push",
          "getMin",
          "pop",
          "top",
          "getMin"
        ],
        "arguments": [
          [],
          [
            -2
          ],
          [
            0
          ],
          [
            -3
          ],
          [],
          [],
          [],
          []
        ]
      },
      "expected": [
        null,
        null,
        null,
        null,
        -3,
        null,
        0,
        -2
      ]
    }
  ],
})
