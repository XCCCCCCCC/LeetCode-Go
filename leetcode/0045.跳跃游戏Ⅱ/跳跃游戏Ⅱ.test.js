const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { jump_func1 } = loadSolution(path.join(__dirname, '跳跃游戏Ⅱ.js'), ['jump_func1'])

test('跳跃游戏 II', () => {
  assert.equal(jump_func1([2, 3, 1, 1, 4]), 2)
  assert.equal(jump_func1([2, 3, 0, 1, 4]), 2)
  assert.equal(jump_func1([0]), 0)
})
