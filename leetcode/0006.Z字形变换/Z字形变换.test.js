const test = require('node:test')
const assert = require('node:assert/strict')
const path = require('node:path')
const { loadSolution } = require('../../leetcode-test-utils')

const { convert_func2 } = loadSolution(path.join(__dirname, 'Z字形变换.js'), ['convert_func2'])

test('Z 字形变换', () => {
  assert.equal(convert_func2('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR')
  assert.equal(convert_func2('A', 1), 'A')
})
