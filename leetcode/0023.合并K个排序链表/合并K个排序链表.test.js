const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')
const { mergeKLists } = loadSolution(path.join(__dirname, '合并K个排序链表.js'), ['mergeKLists'])

test('合并 K 个排序链表', () => {
  const lists = [[1, 4, 5], [1, 3, 4], [2, 6]].map(arrayToList)
  assert.deepEqual(listToArray(mergeKLists(lists)), [1, 1, 2, 3, 4, 4, 5, 6])
})
