// official-examples: generated from leetcode.cn
const path = require('node:path')
const { defineOfficialTests } = require('../../leetcode-test-utils')

defineOfficialTests({
  id: 4,
  title: "寻找两个正序数组的中位数",
  solutionFile: path.join(__dirname, "寻找两个正序数组的中位数.js"),
  entryName: "findMedianSortedArrays_func1",
  meta: {
    "name": "findMedianSortedArrays",
    "params": [
      {
        "name": "nums1",
        "type": "integer[]"
      },
      {
        "name": "nums2",
        "type": "integer[]"
      }
    ],
    "return": {
      "type": "double"
    }
  },
  examples: [
    {
      "input": {
        "nums1": [
          1,
          3
        ],
        "nums2": [
          2
        ]
      },
      "expected": 2
    },
    {
      "input": {
        "nums1": [
          1,
          2
        ],
        "nums2": [
          3,
          4
        ]
      },
      "expected": 2.5
    }
  ],
})
