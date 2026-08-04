const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { fourSum_func1 } = loadSolution(path.join(__dirname, '四数之和.js'), ['fourSum_func1'])

test('四数之和', () => {
  const actual = fourSum_func1([1, 0, -1, 0, -2, 2], 0)
  const expected = [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  assert.deepEqual(normalizeGroups(actual), normalizeGroups(expected))
})
