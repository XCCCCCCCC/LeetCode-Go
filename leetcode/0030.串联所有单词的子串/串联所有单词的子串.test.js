const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, toPlain } = require('../../leetcode-test-utils')
const { findSubstring_func1 } = loadSolution(path.join(__dirname, '串联所有单词的子串.js'), ['findSubstring_func1'])

test('串联所有单词的子串', () => {
  assert.deepEqual(toPlain(findSubstring_func1('barfoothefoobarman', ['foo', 'bar'])), [0, 9])
  assert.deepEqual(toPlain(findSubstring_func1('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'])), [])
})
