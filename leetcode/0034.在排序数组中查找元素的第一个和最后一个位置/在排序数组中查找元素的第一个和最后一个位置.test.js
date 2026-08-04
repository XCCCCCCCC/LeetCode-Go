const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, toPlain } = require('../../leetcode-test-utils')
const { searchRange_func2 } = loadSolution(path.join(__dirname, '在排序数组中查找元素的第一个和最后一个位置.js'), ['searchRange_func2'])

test('在排序数组中查找元素的第一个和最后一个位置', () => {
  assert.deepEqual(toPlain(searchRange_func2([5, 7, 7, 8, 8, 10], 8)), [3, 4])
  assert.deepEqual(toPlain(searchRange_func2([5, 7, 7, 8, 8, 10], 6)), [-1, -1])
})
