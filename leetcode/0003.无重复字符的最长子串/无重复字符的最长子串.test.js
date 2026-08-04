const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { lengthOfLongestSubString_func2 } = loadSolution(path.join(__dirname, '无重复字符的最长子串.js'), ['lengthOfLongestSubString_func2'])

test('无重复字符的最长子串：滑动窗口', () => {
  assert.equal(lengthOfLongestSubString_func2('abcabcbb'), 3)
  assert.equal(lengthOfLongestSubString_func2('bbbbb'), 1)
  assert.equal(lengthOfLongestSubString_func2(''), 0)
})
