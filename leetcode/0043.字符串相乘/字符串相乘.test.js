const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { multiply_func1 } = loadSolution(path.join(__dirname, '字符串相乘.js'), ['multiply_func1'])

test('字符串相乘', () => {
  assert.equal(multiply_func1('2', '3'), '6')
  assert.equal(multiply_func1('123', '456'), '56088')
  assert.equal(multiply_func1('0', '52'), '0')
})
