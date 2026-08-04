const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { nextPermutation_func1 } = loadSolution(path.join(__dirname, '下一个排列.js'), ['nextPermutation_func1'])

test('下一个排列', () => {
  const nums1 = [1, 2, 3]
  nextPermutation_func1(nums1)
  assert.deepEqual(nums1, [1, 3, 2])

  const nums2 = [3, 2, 1]
  nextPermutation_func1(nums2)
  assert.deepEqual(nums2, [1, 2, 3])
})
