const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { removeElement_func1 } = loadSolution(path.join(__dirname, '移除元素.js'), ['removeElement_func1'])

test('移除元素', () => {
  const nums = [3, 2, 2, 3]
  const length = removeElement_func1(nums, 3)
  assert.equal(length, 2)
  assert.deepEqual(nums.slice(0, length).sort(), [2, 2])
})
