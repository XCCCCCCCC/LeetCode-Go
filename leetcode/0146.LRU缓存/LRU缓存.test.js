// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 146,
  title: "LRU 缓存",
  solutionFile: path.join(__dirname, "LRU缓存.js"),
  entryName: "LRUCache",
  meta: {
    "classname": "LRUCache",
    "constructor": {
      "params": [
        {
          "type": "integer",
          "name": "capacity"
        }
      ]
    },
    "methods": [
      {
        "name": "get",
        "params": [
          {
            "type": "integer",
            "name": "key"
          }
        ],
        "return": {
          "type": "integer"
        }
      },
      {
        "name": "put",
        "params": [
          {
            "type": "integer",
            "name": "key"
          },
          {
            "type": "integer",
            "name": "value"
          }
        ],
        "return": {
          "type": "void"
        }
      }
    ],
    "return": {
      "type": "list<String>",
      "dealloc": true
    },
    "systemdesign": true
  },
  examples: [
    {
      "input": {
        "operations": [
          "LRUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "put",
          "get",
          "get",
          "get"
        ],
        "arguments": [
          [
            2
          ],
          [
            1,
            1
          ],
          [
            2,
            2
          ],
          [
            1
          ],
          [
            3,
            3
          ],
          [
            2
          ],
          [
            4,
            4
          ],
          [
            1
          ],
          [
            3
          ],
          [
            4
          ]
        ]
      },
      "expected": [
        null,
        null,
        null,
        1,
        null,
        -1,
        null,
        -1,
        3,
        4
      ]
    }
  ],
})
