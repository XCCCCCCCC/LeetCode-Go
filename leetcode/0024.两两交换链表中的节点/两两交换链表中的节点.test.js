const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')
const { swapPairs_func1 } = loadSolution(path.join(__dirname, '两两交换链表中的节点.js'), ['swapPairs_func1'])

test('两两交换链表中的节点', () => {
  assert.deepEqual(listToArray(swapPairs_func1(arrayToList([1, 2, 3, 4]))), [2, 1, 4, 3])
  assert.deepEqual(listToArray(swapPairs_func1(null)), [])
})
