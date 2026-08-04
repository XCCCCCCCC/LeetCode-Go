const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { search_func2 } = loadSolution(path.join(__dirname, '搜索旋转排序数组.js'), ['search_func2'])

test('搜索旋转排序数组', () => {
  assert.equal(search_func2([4, 5, 6, 7, 0, 1, 2], 0), 4)
  assert.equal(search_func2([4, 5, 6, 7, 0, 1, 2], 3), -1)
})
