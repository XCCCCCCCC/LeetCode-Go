const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { strStr_func1 } = loadSolution(path.join(__dirname, '实现strStr().js'), ['strStr_func1'])

test('实现 strStr', () => {
  assert.equal(strStr_func1('sadbutsad', 'sad'), 0)
  assert.equal(strStr_func1('leetcode', 'leeto'), -1)
  assert.equal(strStr_func1('abc', ''), 0)
})
