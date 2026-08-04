const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { intToRoman_func1 } = loadSolution(path.join(__dirname, '整数转罗马数字.js'), ['intToRoman_func1'])

test('整数转罗马数字', () => {
  assert.equal(intToRoman_func1(3), 'III')
  assert.equal(intToRoman_func1(1994), 'MCMXCIV')
})
