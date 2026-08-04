const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, normalizeGroups } = require('../../leetcode-test-utils')
const { groupAnagrams2 } = loadSolution(path.join(__dirname, '字母异位词分组.js'), ['groupAnagrams2'])

test('字母异位词分组：官方示例', () => {
  const actual = groupAnagrams2(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])
  const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
  assert.deepEqual(normalizeGroups(actual), normalizeGroups(expected))
})

test('字母异位词分组：连续同组元素', () => {
  assert.deepEqual(normalizeGroups(groupAnagrams2(['eat', 'tea', 'ate'])), normalizeGroups([['eat', 'tea', 'ate']]))
})
