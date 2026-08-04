const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')
const { removeNthFromEnd_func1 } = loadSolution(path.join(__dirname, '删除链表的倒数第N个结点.js'), ['removeNthFromEnd_func1'])

test('删除链表的倒数第 N 个结点', () => {
  assert.deepEqual(listToArray(removeNthFromEnd_func1(arrayToList([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5])
  assert.deepEqual(listToArray(removeNthFromEnd_func1(arrayToList([1]), 1)), [])
})
