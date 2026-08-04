const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { arrayToList, listToArray, loadSolution } = require('../../leetcode-test-utils')

const { addTwoNumbers_func2 } = loadSolution(path.join(__dirname, '两数相加.js'), ['addTwoNumbers_func2'])

test('两数相加：包含进位', () => {
  assert.deepEqual(listToArray(addTwoNumbers_func2(arrayToList([2, 4, 3]), arrayToList([5, 6, 4]))), [7, 0, 8])
})
