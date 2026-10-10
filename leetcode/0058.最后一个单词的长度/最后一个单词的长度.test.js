const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { lengthOfLastWord } = loadSolution(
  path.join(__dirname, '最后一个单词的长度.js'),
  ['lengthOfLastWord'],
)

test('58. 最后一个单词的长度：官方示例', () => {
  assert.equal(lengthOfLastWord('Hello World'), 5)
  assert.equal(lengthOfLastWord('   fly me   to   the moon  '), 4)
  assert.equal(lengthOfLastWord('luffy is still joyboy'), 6)
})

test('58. 最后一个单词的长度：单字符与末尾空格', () => {
  assert.equal(lengthOfLastWord('a'), 1)
  assert.equal(lengthOfLastWord('a '), 1)
})
