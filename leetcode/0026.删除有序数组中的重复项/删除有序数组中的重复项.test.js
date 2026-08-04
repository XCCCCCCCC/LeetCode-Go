const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { removeDuplicates_func2 } = loadSolution(path.join(__dirname, '删除有序数组中的重复项.js'), ['removeDuplicates_func2'])

test('删除有序数组中的重复项', () => {
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  const length = removeDuplicates_func2(nums)
  assert.equal(length, 5)
  assert.deepEqual(nums.slice(0, length), [0, 1, 2, 3, 4])
})
