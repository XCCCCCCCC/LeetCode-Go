const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { combinationSum2_func1 } = loadSolution(path.join(__dirname, '组合总和Ⅱ.js'), ['combinationSum2_func1'])

test('组合总和 II', () => {
  const actual = combinationSum2_func1([10, 1, 2, 7, 6, 1, 5], 8)
  const expected = [[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]
  assert.deepEqual(normalizeGroups(actual), normalizeGroups(expected))
})
