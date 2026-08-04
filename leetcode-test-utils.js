const fs = require('node:fs')
const vm = require('node:vm')
const test = require('node:test')
const assert = require('node:assert/strict')

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val
    this.next = next
  }
}

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function arrayToList(values) {
  const dummy = new ListNode()
  let current = dummy

  for (const value of values) {
    current.next = new ListNode(value)
    current = current.next
  }

  return dummy.next
}

function listToArray(head) {
  const result = []
  let current = head
  const visited = new Set()

  while (current && !visited.has(current)) {
    visited.add(current)
    result.push(current.val)
    current = current.next
  }

  return result
}

function arrayToCycleList(values, pos) {
  const nodes = values.map((value) => new ListNode(value))
  for (let i = 0; i < nodes.length - 1; i++) {
    nodes[i].next = nodes[i + 1]
  }
  if (nodes.length && pos >= 0) {
    nodes[nodes.length - 1].next = nodes[pos]
  }
  return {
    head: nodes[0] || null,
    entry: pos >= 0 ? nodes[pos] : null,
  }
}

function arrayToRandomList(values) {
  const nodes = values.map(([value]) => ({ val: value, next: null, random: null }))
  for (let i = 0; i < nodes.length; i++) {
    nodes[i].next = nodes[i + 1] || null
    const randomIndex = values[i][1]
    nodes[i].random = randomIndex == null ? null : nodes[randomIndex]
  }
  return nodes[0] || null
}

function randomListToArray(head) {
  const nodes = []
  const indexes = new Map()
  let current = head

  while (current && !indexes.has(current)) {
    indexes.set(current, nodes.length)
    nodes.push(current)
    current = current.next
  }

  return nodes.map((node) => [node.val, node.random == null ? null : indexes.get(node.random)])
}

function arrayToTree(values) {
  if (!values.length || values[0] == null) {
    return null
  }

  const root = new TreeNode(values[0])
  const queue = [root]
  let index = 1

  while (queue.length && index < values.length) {
    const node = queue.shift()

    if (values[index] != null) {
      node.left = new TreeNode(values[index])
      queue.push(node.left)
    }
    index++

    if (index < values.length && values[index] != null) {
      node.right = new TreeNode(values[index])
      queue.push(node.right)
    }
    index++
  }

  return root
}

function treeToArray(root) {
  if (!root) {
    return []
  }

  const result = []
  const queue = [root]

  while (queue.length) {
    const node = queue.shift()
    if (!node) {
      result.push(null)
      continue
    }

    result.push(node.val)
    queue.push(node.left)
    queue.push(node.right)
  }

  while (result[result.length - 1] == null) {
    result.pop()
  }

  return result
}

function findTreeNode(root, value) {
  if (!root) return null
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    if (node.val === value) return node
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return null
}

function toPlain(value) {
  if (value === undefined) {
    return undefined
  }

  return JSON.parse(JSON.stringify(value))
}

function normalizeGroups(groups) {
  return toPlain(groups)
    .map((group) => [...group].sort((a, b) => String(a).localeCompare(String(b))))
    .sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
}

function normalizeOuterCollection(collection) {
  return toPlain(collection).sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)))
}

function isBalancedTree(root) {
  function height(node) {
    if (!node) return 0
    const left = height(node.left)
    if (left === -1) return -1
    const right = height(node.right)
    if (right === -1 || Math.abs(left - right) > 1) return -1
    return Math.max(left, right) + 1
  }
  return height(root) !== -1
}

function inorderValues(root) {
  const result = []
  function traverse(node) {
    if (!node) return
    traverse(node.left)
    result.push(node.val)
    traverse(node.right)
  }
  traverse(root)
  return result
}

function loadSolution(filePath, functionNames) {
  const source = fs.readFileSync(filePath, 'utf8')
  const exportsExpression = functionNames
    .map((name) => `${JSON.stringify(name)}: typeof ${name} === 'undefined' ? undefined : ${name}`)
    .join(',')
  const sandbox = {
    console,
    ListNode,
    TreeNode,
  }

  vm.runInNewContext(
    `${source}\n;globalThis.__leetcodeExports = {${exportsExpression}}`,
    sandbox,
    { filename: filePath },
  )

  return sandbox.__leetcodeExports
}

function convertArgument(type, value) {
  if (type === 'ListNode') return arrayToList(value)
  if (type === 'ListNode[]') return value.map(arrayToList)
  if (type === 'TreeNode') return arrayToTree(value)
  return structuredClone(value)
}

function serializeValue(type, value) {
  if (type === 'ListNode') return listToArray(value)
  if (type === 'TreeNode') return treeToArray(value)
  return toPlain(value)
}

function buildIntersectionInput(input) {
  const shared = arrayToList(input.listA.slice(input.skipA))
  function build(values, skip) {
    if (skip === 0) return shared
    const head = arrayToList(values.slice(0, skip))
    let current = head
    while (current.next) current = current.next
    current.next = shared
    return head
  }
  return [build(input.listA, input.skipA), build(input.listB, input.skipB)]
}

function runDesignCase(Constructor, example) {
  const [constructorArgs, ...methodArgs] = example.arguments
  const instance = new Constructor(...constructorArgs)
  const result = [null]

  for (let i = 1; i < example.operations.length; i++) {
    const value = instance[example.operations[i]](...methodArgs[i - 1])
    result.push(value === undefined ? null : toPlain(value))
  }

  return result
}

function prepareCase(problemId, meta, example) {
  if (meta.systemdesign) {
    return { args: [], context: {}, design: true }
  }

  if (problemId === 160) {
    return { args: buildIntersectionInput(example.input), context: {} }
  }

  if (problemId === 141 || problemId === 142) {
    const cycle = arrayToCycleList(example.input.head, example.input.pos)
    return { args: [cycle.head], context: { cycleEntry: cycle.entry } }
  }

  if (problemId === 138) {
    return { args: [arrayToRandomList(example.input.head)], context: {} }
  }

  if (problemId === 236) {
    const root = arrayToTree(example.input.root)
    return {
      args: [root, findTreeNode(root, example.input.p), findTreeNode(root, example.input.q)],
      context: {},
    }
  }

  const args = meta.params.map((param) => convertArgument(param.type, example.input[param.name]))
  return { args, context: {} }
}

function compareOfficialResult(problemId, meta, example, actual, prepared) {
  if (problemId === 5) {
    assert.equal(typeof actual, 'string')
    assert.equal(actual.length, example.expected.length)
    assert.equal(actual, [...actual].reverse().join(''))
    assert.equal(example.input.s.includes(actual), true)
    return
  }

  if (problemId === 108) {
    assert.deepEqual(inorderValues(actual), example.input.nums)
    assert.equal(isBalancedTree(actual), true)
    return
  }

  if (problemId === 142) {
    assert.equal(actual, prepared.context.cycleEntry)
    return
  }

  if (problemId === 160 || problemId === 236) {
    assert.equal(actual?.val ?? null, example.expected)
    return
  }

  if (problemId === 138) {
    assert.deepEqual(randomListToArray(actual), example.expected)
    return
  }

  let comparable
  if (meta.return.type === 'void') {
    const outputIndex = meta.output?.paramindex ?? 0
    comparable = serializeValue(meta.params[outputIndex].type, prepared.args[outputIndex])
  } else {
    comparable = serializeValue(meta.return.type, actual)
  }

  if ([49, 39, 78].includes(problemId)) {
    assert.deepEqual(normalizeGroups(comparable), normalizeGroups(example.expected))
    return
  }

  if ([46, 51, 131].includes(problemId)) {
    assert.deepEqual(normalizeOuterCollection(comparable), normalizeOuterCollection(example.expected))
    return
  }

  if (problemId === 347) {
    assert.deepEqual([...comparable].sort((a, b) => a - b), [...example.expected].sort((a, b) => a - b))
    return
  }

  assert.deepEqual(comparable, example.expected)
}

function defineOfficialTests({ id, title, solutionFile, entryName, meta, examples }) {
  const source = fs.readFileSync(solutionFile, 'utf8')
  const isTodo = source.includes('TODO(hot100)') && process.env.LEETCODE_FORCE_TEST !== '1'
  const loaded = loadSolution(solutionFile, [entryName])
  const solution = loaded[entryName]

  examples.forEach((example, index) => {
    test(`官方示例 ${index + 1}：${id}. ${title}`, { skip: isTodo }, () => {
      assert.equal(typeof solution, 'function', `未找到入口 ${entryName}`)

      if (meta.systemdesign) {
        assert.deepEqual(runDesignCase(solution, example.input), example.expected)
        return
      }

      const prepared = prepareCase(id, meta, example)
      const actual = solution(...prepared.args)
      compareOfficialResult(id, meta, example, actual, prepared)
    })
  })
}

module.exports = {
  ListNode,
  TreeNode,
  arrayToCycleList,
  arrayToList,
  arrayToRandomList,
  arrayToTree,
  defineOfficialTests,
  findTreeNode,
  listToArray,
  loadSolution,
  normalizeGroups,
  normalizeOuterCollection,
  randomListToArray,
  treeToArray,
  toPlain,
}
