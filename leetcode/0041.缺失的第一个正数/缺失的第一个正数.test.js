const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { firstMissingPositive_func2 } = loadSolution(path.join(__dirname, '缺失的第一个正数.js'), ['firstMissingPositive_func2'])

test('缺失的第一个正数', () => {
  assert.equal(firstMissingPositive_func2([1, 2, 0]), 3)
  assert.equal(firstMissingPositive_func2([3, 4, -1, 1]), 2)
  assert.equal(firstMissingPositive_func2([7, 8, 9, 11, 12]), 1)
})
