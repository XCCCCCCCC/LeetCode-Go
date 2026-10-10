const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { canConstruct } = loadSolution(
  path.join(__dirname, '赎金信.js'),
  ['canConstruct'],
)

test('383. 赎金信：官方示例', () => {
  assert.equal(canConstruct('a', 'b'), false)
  assert.equal(canConstruct('aa', 'ab'), false)
  assert.equal(canConstruct('aa', 'aab'), true)
})

test('383. 赎金信：重复字符和空字符串', () => {
  assert.equal(canConstruct('a', 'a'), true)
  assert.equal(canConstruct('aaa', 'aa'), false)
  assert.equal(canConstruct('', 'abc'), true)
})
