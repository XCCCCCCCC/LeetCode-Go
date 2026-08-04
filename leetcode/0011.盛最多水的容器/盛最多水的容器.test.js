const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { maxArea_func2 } = loadSolution(path.join(__dirname, '盛最多水的容器.js'), ['maxArea_func2'])

test('盛最多水的容器', () => {
  assert.equal(maxArea_func2([1, 8, 6, 2, 5, 4, 8, 3, 7]), 49)
  assert.equal(maxArea_func2([1, 1]), 1)
})
