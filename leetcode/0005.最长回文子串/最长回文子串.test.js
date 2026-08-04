const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { longestPalindrome_func2 } = loadSolution(path.join(__dirname, '最长回文子串.js'), ['longestPalindrome_func2'])

test('最长回文子串', () => {
  assert.ok(['bab', 'aba'].includes(longestPalindrome_func2('babad')))
  assert.equal(longestPalindrome_func2('cbbd'), 'bb')
})
