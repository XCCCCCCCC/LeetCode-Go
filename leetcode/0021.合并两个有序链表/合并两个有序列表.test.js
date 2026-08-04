const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')
const { mergeTwoLists_func1 } = loadSolution(path.join(__dirname, '合并两个有序列表.js'), ['mergeTwoLists_func1'])

test('合并两个有序链表', () => {
  const actual = mergeTwoLists_func1(arrayToList([1, 2, 4]), arrayToList([1, 3, 4]))
  assert.deepEqual(listToArray(actual), [1, 1, 2, 3, 4, 4])
})
