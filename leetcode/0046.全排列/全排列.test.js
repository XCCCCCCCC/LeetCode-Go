const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { permute_func1 } = loadSolution(path.join(__dirname, '全排列.js'), ['permute_func1'])

test('全排列', () => {
  const expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  assert.deepEqual(normalizeGroups(permute_func1([1, 2, 3])), normalizeGroups(expected))
})
