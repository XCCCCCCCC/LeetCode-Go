const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { romanToInt_func1 } = loadSolution(path.join(__dirname, '罗马数字转整数.js'), ['romanToInt_func1'])

test('罗马数字转整数', () => {
  assert.equal(romanToInt_func1('III'), 3)
  assert.equal(romanToInt_func1('MCMXCIV'), 1994)
})
