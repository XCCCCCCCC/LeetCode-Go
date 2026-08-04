// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 208,
  title: "实现 Trie (前缀树)",
  solutionFile: path.join(__dirname, "实现Trie(前缀树).js"),
  entryName: "Trie",
  meta: {
    "classname": "Trie",
    "constructor": {
      "params": []
    },
    "methods": [
      {
        "params": [
          {
            "type": "string",
            "name": "word"
          }
        ],
        "name": "insert",
        "return": {
          "type": "void"
        }
      },
      {
        "params": [
          {
            "type": "string",
            "name": "word"
          }
        ],
        "name": "search",
        "return": {
          "type": "boolean"
        }
      },
      {
        "params": [
          {
            "type": "string",
            "name": "prefix"
          }
        ],
        "name": "startsWith",
        "return": {
          "type": "boolean"
        }
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
          "Trie",
          "insert",
          "search",
          "search",
          "startsWith",
          "insert",
          "search"
        ],
        "arguments": [
          [],
          [
            "apple"
          ],
          [
            "apple"
          ],
          [
            "app"
          ],
          [
            "app"
          ],
          [
            "app"
          ],
          [
            "app"
          ]
        ]
      },
      "expected": [
        null,
        null,
        true,
        false,
        true,
        null,
        true
      ]
    }
  ],
})
