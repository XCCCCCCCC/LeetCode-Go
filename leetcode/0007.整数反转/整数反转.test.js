const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { reverse_func1 } = loadSolution(path.join(__dirname, '整数反转.js'), ['reverse_func1'])

test('整数反转', () => {
  assert.equal(reverse_func1(123), 321)
  assert.equal(reverse_func1(-123), -321)
  assert.equal(reverse_func1(1534236469), 0)
})
