const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { searchInsert_func1 } = loadSolution(path.join(__dirname, '搜索插入位置.js'), ['searchInsert_func1'])

test('搜索插入位置', () => {
  assert.equal(searchInsert_func1([1, 3, 5, 6], 5), 2)
  assert.equal(searchInsert_func1([1, 3, 5, 6], 2), 1)
  assert.equal(searchInsert_func1([1, 3, 5, 6], 7), 4)
})
