// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 138,
  title: "随机链表的复制",
  solutionFile: path.join(__dirname, "随机链表的复制.js"),
  entryName: "copyRandomList",
  meta: {
    "name": "copyRandomList",
    "params": [
      {
        "name": "head",
        "type": "ListNode"
      }
    ],
    "return": {
      "type": "ListNode"
    }
  },
  examples: [
    {
      "input": {
        "head": [
          [
            7,
            null
          ],
          [
            13,
            0
          ],
          [
            11,
            4
          ],
          [
            10,
            2
          ],
          [
            1,
            0
          ]
        ]
      },
      "expected": [
        [
          7,
          null
        ],
        [
          13,
          0
        ],
        [
          11,
          4
        ],
        [
          10,
          2
        ],
        [
          1,
          0
        ]
      ]
    },
    {
      "input": {
        "head": [
          [
            1,
            1
          ],
          [
            2,
            1
          ]
        ]
      },
      "expected": [
        [
          1,
          1
        ],
        [
          2,
          1
        ]
      ]
    },
    {
      "input": {
        "head": [
          [
            3,
            null
          ],
          [
            3,
            0
          ],
          [
            3,
            null
          ]
        ]
      },
      "expected": [
        [
          3,
          null
        ],
        [
          3,
          0
        ],
        [
          3,
          null
        ]
      ]
    }
  ],
})
