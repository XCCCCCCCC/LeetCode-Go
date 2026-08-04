const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, toPlain } = require('../../leetcode-test-utils')
const { letterCombinations_func1 } = loadSolution(path.join(__dirname, '电话号码的字母组合.js'), ['letterCombinations_func1'])

test('电话号码的字母组合', () => {
  assert.deepEqual(toPlain(letterCombinations_func1('23')).sort(), ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  assert.deepEqual(toPlain(letterCombinations_func1('')), [])
})
