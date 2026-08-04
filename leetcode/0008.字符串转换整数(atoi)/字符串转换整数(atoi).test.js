const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { myAtoi_func2 } = loadSolution(path.join(__dirname, '字符串转换整数(atoi).js'), ['myAtoi_func2'])

test('字符串转换整数', () => {
  assert.equal(myAtoi_func2('42'), 42)
  assert.equal(myAtoi_func2('   -42'), -42)
  assert.equal(myAtoi_func2('4193 with words'), 4193)
})
