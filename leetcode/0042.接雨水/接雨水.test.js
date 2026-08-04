const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { trap_func1 } = loadSolution(path.join(__dirname, '接雨水.js'), ['trap_func1'])

test('接雨水', () => {
  assert.equal(trap_func1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]), 6)
  assert.equal(trap_func1([4, 2, 0, 3, 2, 5]), 9)
})
