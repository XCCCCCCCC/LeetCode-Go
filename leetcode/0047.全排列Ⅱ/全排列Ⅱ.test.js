const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { permuteUnique_func1 } = loadSolution(path.join(__dirname, '全排列Ⅱ.js'), ['permuteUnique_func1'])

test('全排列 II', () => {
  const expected = [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
  assert.deepEqual(normalizeGroups(permuteUnique_func1([1, 1, 2])), normalizeGroups(expected))
})
