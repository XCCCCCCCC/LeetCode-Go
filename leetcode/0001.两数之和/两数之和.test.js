const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution, toPlain } = require('../../leetcode-test-utils')

const { twoSun_func2 } = loadSolution(path.join(__dirname, '两数之和.js'), ['twoSun_func2'])

test('两数之和：找到一组下标', () => {
  const result = toPlain(twoSun_func2([2, 7, 11, 15], 9))
  assert.equal(result.length, 2)
  assert.equal([2, 7, 11, 15][result[0]] + [2, 7, 11, 15][result[1]], 9)
})
