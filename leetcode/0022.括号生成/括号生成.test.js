const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, toPlain } = require('../../leetcode-test-utils')
const { generateParenthesis_func1 } = loadSolution(path.join(__dirname, '括号生成.js'), ['generateParenthesis_func1'])

test('括号生成', () => {
  const actual = toPlain(generateParenthesis_func1(3)).sort()
  assert.deepEqual(actual, ['((()))', '(()())', '(())()', '()(())', '()()()'].sort())
})
