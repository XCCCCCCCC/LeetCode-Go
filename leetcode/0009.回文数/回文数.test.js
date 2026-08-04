const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { isPalindrome_func2 } = loadSolution(path.join(__dirname, '回文数.js'), ['isPalindrome_func2'])

test('回文数', () => {
  assert.equal(isPalindrome_func2(121), true)
  assert.equal(isPalindrome_func2(-121), false)
  assert.equal(isPalindrome_func2(10), false)
})
