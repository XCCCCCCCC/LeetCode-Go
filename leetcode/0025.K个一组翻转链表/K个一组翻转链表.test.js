const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')
const { reverseKGroup } = loadSolution(path.join(__dirname, 'K个一组翻转链表.js'), ['reverseKGroup'])

test('K 个一组翻转链表', () => {
  assert.deepEqual(listToArray(reverseKGroup(arrayToList([1, 2, 3, 4, 5]), 2)), [2, 1, 4, 3, 5])
})
