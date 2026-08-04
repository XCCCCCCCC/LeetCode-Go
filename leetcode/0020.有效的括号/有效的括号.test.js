const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { isValid_func1 } = loadSolution(path.join(__dirname, '有效的括号.js'), ['isValid_func1'])

test('有效的括号', () => {
  assert.equal(isValid_func1('()[]{}'), true)
  assert.equal(isValid_func1('(]'), false)
  assert.equal(isValid_func1('([)]'), false)
})
