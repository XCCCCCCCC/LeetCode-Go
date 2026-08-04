const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { longestValidParentheses_func2 } = loadSolution(path.join(__dirname, '最长有效括号.js'), ['longestValidParentheses_func2'])

test('最长的有效括号', () => {
  assert.equal(longestValidParentheses_func2('(()'), 2)
  assert.equal(longestValidParentheses_func2(')()())'), 4)
  assert.equal(longestValidParentheses_func2(''), 0)
})
