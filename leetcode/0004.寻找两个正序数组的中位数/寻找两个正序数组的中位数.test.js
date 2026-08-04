const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { findMedianSortedArrays_func1 } = loadSolution(path.join(__dirname, '寻找两个正序数组的中位数.js'), ['findMedianSortedArrays_func1'])

test('寻找两个正序数组的中位数', () => {
  assert.equal(findMedianSortedArrays_func1([1, 3], [2]), 2)
  assert.equal(findMedianSortedArrays_func1([1, 2], [3, 4]), 2.5)
})
