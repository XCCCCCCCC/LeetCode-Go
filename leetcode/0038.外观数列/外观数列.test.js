const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')
const { countAndSay } = loadSolution(path.join(__dirname, '外观数列.js'), ['countAndSay'])

test('外观数列', () => {
  assert.equal(countAndSay(1), '1')
  assert.equal(countAndSay(4), '1211')
})
