const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { isPalindrome } = loadSolution(
  path.join(__dirname, '验证回文串.js'),
  ['isPalindrome'],
)

test('125. 验证回文串：官方示例', () => {
  assert.equal(isPalindrome('A man, a plan, a canal: Panama'), true)
  assert.equal(isPalindrome('race a car'), false)
  assert.equal(isPalindrome(' '), true)
})

test('125. 验证回文串：数字、大小写和特殊字符', () => {
  assert.equal(isPalindrome('0P'), false)
  assert.equal(isPalindrome('a.'), true)
  assert.equal(isPalindrome('Madam'), true)
})
