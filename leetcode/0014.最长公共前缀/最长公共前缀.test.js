const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { longestCommonPrefix } = loadSolution(path.join(__dirname, '最长公共前缀.js'), ['longestCommonPrefix'])

test('最长公共前缀', () => {
  assert.equal(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
  assert.equal(longestCommonPrefix(['dog', 'racecar', 'car']), '')
})
