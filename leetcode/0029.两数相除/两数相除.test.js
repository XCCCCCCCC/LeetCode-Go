const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { divide_func1 } = loadSolution(path.join(__dirname, '两数相除.js'), ['divide_func1'])

test('两数相除', () => {
  assert.equal(divide_func1(10, 3), 3)
  assert.equal(divide_func1(7, -3), -2)
})
