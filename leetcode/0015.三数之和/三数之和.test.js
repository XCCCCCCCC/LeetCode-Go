const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { threeSum_func1 } = loadSolution(path.join(__dirname, '三数之和.js'), ['threeSum_func1'])

test('三数之和', () => {
  assert.deepEqual(normalizeGroups(threeSum_func1([-1, 0, 1, 2, -1, -4])), normalizeGroups([[-1, -1, 2], [-1, 0, 1]]))
  assert.deepEqual(normalizeGroups(threeSum_func1([0, 1, 1])), [])
})
