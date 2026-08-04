const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { threeSumClosest_func1 } = loadSolution(path.join(__dirname, '最接近的三数之和.js'), ['threeSumClosest_func1'])

test('最接近的三数之和', () => {
  assert.equal(threeSumClosest_func1([-1, 2, 1, -4], 1), 2)
  assert.equal(threeSumClosest_func1([0, 0, 0], 1), 0)
})
