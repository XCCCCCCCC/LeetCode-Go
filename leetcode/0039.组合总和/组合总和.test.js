const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { combinationSum_func1 } = loadSolution(path.join(__dirname, '组合总和.js'), ['combinationSum_func1'])

test('组合总和', () => {
  assert.deepEqual(normalizeGroups(combinationSum_func1([2, 3, 6, 7], 7)), normalizeGroups([[2, 2, 3], [7]]))
})
