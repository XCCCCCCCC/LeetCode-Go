const fs = require('node:fs/promises')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const GRAPHQL_URL = 'https://leetcode.cn/graphql/'
const GENERATED_MARKER = '// official-examples: generated from leetcode.cn'
const TODO_MARKER = '// TODO(hot100): 完成解法后删除本行。'

const fallbackExamples = {
  49: [
    { input: { strs: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'] }, expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']] },
    { input: { strs: [''] }, expected: [['']] },
    { input: { strs: ['a'] }, expected: [['a']] },
  ],
  199: [
    { input: { root: [1, 2, 3, null, 5, null, 4] }, expected: [1, 3, 4] },
    { input: { root: [1, 2, 3, 4, null, null, null, 5] }, expected: [1, 3, 4, 5] },
    { input: { root: [1, null, 3] }, expected: [1, 3] },
    { input: { root: [] }, expected: [] },
  ],
  20: [
    { input: { s: '()' }, expected: true },
    { input: { s: '()[]{}' }, expected: true },
    { input: { s: '(]' }, expected: false },
    { input: { s: '([])' }, expected: true },
    { input: { s: '([)]' }, expected: false },
  ],
  347: [
    { input: { nums: [1, 1, 1, 2, 2, 3], k: 2 }, expected: [1, 2] },
    { input: { nums: [1], k: 1 }, expected: [1] },
    { input: { nums: [1, 2, 1, 2, 1, 2, 3, 1, 3, 2], k: 2 }, expected: [1, 2] },
  ],
  136: [
    { input: { nums: [2, 2, 1] }, expected: 1 },
    { input: { nums: [4, 1, 2, 1, 2] }, expected: 4 },
    { input: { nums: [1] }, expected: 1 },
  ],
}

function decodeHtml(text) {
  return text
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, '')
    .replace(/\r/g, '')
}

function splitTopLevel(text) {
  const result = []
  let current = ''
  let depth = 0
  let quote = ''
  let escaped = false

  for (const character of text) {
    if (quote) {
      current += character
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = ''
      continue
    }

    if (character === '"' || character === "'") {
      quote = character
      current += character
      continue
    }

    if ('([{'.includes(character)) depth++
    if (')]}'.includes(character)) depth--

    if ((character === ',' || character === '\n') && depth === 0) {
      if (current.trim()) result.push(current.trim())
      current = ''
    } else {
      current += character
    }
  }

  if (current.trim()) result.push(current.trim())
  return result
}

function parseValue(text) {
  const value = text.trim().replace(/;$/, '')
  try {
    return JSON.parse(value)
  } catch {
    if (/^-?\d+(\.\d+)?$/.test(value)) return Number(value)
    if (value === 'true') return true
    if (value === 'false') return false
    if (value === 'null') return null
    return value.replace(/^['"]|['"]$/g, '')
  }
}

function parseAssignments(text, meta) {
  const input = {}
  const unnamed = []
  for (const part of splitTopLevel(text)) {
    const equalIndex = part.indexOf('=')
    if (equalIndex === -1) {
      unnamed.push(parseValue(part))
      continue
    }
    const name = part.slice(0, equalIndex).trim()
    const value = part.slice(equalIndex + 1)
    input[name] = parseValue(value)
  }

  for (const param of meta.params) {
    if (!(param.name in input) && unnamed.length) {
      input[param.name] = unnamed.shift()
    }
  }
  return input
}

function extractJsonValues(text) {
  const values = []
  let start = -1
  let depth = 0
  let quote = ''
  let escaped = false

  for (let i = 0; i < text.length; i++) {
    const character = text[i]
    if (quote) {
      if (escaped) escaped = false
      else if (character === '\\') escaped = true
      else if (character === quote) quote = ''
      continue
    }
    if (character === '"') {
      quote = character
      continue
    }
    if (character === '[') {
      if (depth === 0) start = i
      depth++
    } else if (character === ']') {
      depth--
      if (depth === 0 && start !== -1) {
        values.push(JSON.parse(text.slice(start, i + 1)))
        start = -1
      }
    }
  }

  return values
}

function parseExpected(problemId, text) {
  if (problemId === 160) {
    const match = text.match(/'(-?\d+)'/)
    return match ? Number(match[1]) : null
  }
  if (problemId === 142) {
    const match = text.match(/\d+/)
    return match ? Number(match[0]) : null
  }

  const firstLine = text.trim().split('\n')[0].trim()
  return parseValue(firstLine.replace(/\s*\([^)]*\)$/, ''))
}

function parseExamples(problemId, content, meta) {
  const result = []

  for (const match of content.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/gi)) {
    const text = decodeHtml(match[1]).trim()
    const inputIndex = text.search(/(?:输入|Input)\s*[:：]?/i)
    const outputIndex = text.search(/(?:输出|Output)\s*[:：]?/i)
    if (inputIndex < 0 || outputIndex < 0 || outputIndex <= inputIndex) continue

    const afterInput = text.slice(inputIndex).replace(/^(?:输入|Input)\s*[:：]?\s*/i, '')
    const relativeOutput = afterInput.search(/(?:输出|Output)\s*[:：]?/i)
    const inputText = afterInput.slice(0, relativeOutput).trim()
    const afterOutput = afterInput.slice(relativeOutput).replace(/^(?:输出|Output)\s*[:：]?\s*/i, '')
    const expectedText = afterOutput.split(/\n(?:解释|Explanation)\s*[:：]?/i)[0].trim()

    if (meta.systemdesign) {
      const [operations, args] = extractJsonValues(inputText)
      result.push({ input: { operations, arguments: args }, expected: parseExpected(problemId, expectedText) })
    } else {
      result.push({ input: parseAssignments(inputText, meta), expected: parseExpected(problemId, expectedText) })
    }
  }

  return result.length ? result : fallbackExamples[problemId] || []
}

async function fetchDetails(problems) {
  const result = new Map()
  const batchSize = 20

  for (let offset = 0; offset < problems.length; offset += batchSize) {
    const batch = problems.slice(offset, offset + batchSize)
    const fields = batch
      .map((problem, index) => `q${index}: question(titleSlug: ${JSON.stringify(problem.titleSlug)}) { translatedContent content metaData }`)
      .join('\n')
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'user-agent': 'Mozilla/5.0 LeetCode-Local-Practice' },
      body: JSON.stringify({ query: `query officialExamples {\n${fields}\n}` }),
    })
    const data = await response.json()
    if (data.errors) throw new Error(JSON.stringify(data.errors))

    batch.forEach((problem, index) => {
      const detail = data.data[`q${index}`]
      result.set(problem.id, {
        content: detail.translatedContent || detail.content || '',
        meta: JSON.parse(detail.metaData),
      })
    })
  }

  return result
}

function simplifyMeta(meta) {
  if (meta.systemdesign) {
    return {
      classname: meta.classname,
      constructor: meta.constructor,
      methods: meta.methods,
      return: meta.return,
      systemdesign: true,
    }
  }
  return {
    name: meta.name,
    params: meta.params,
    return: meta.return,
    ...(meta.output ? { output: meta.output } : {}),
  }
}

function validateExamples(problem, meta, examples) {
  for (const [index, example] of examples.entries()) {
    if (example.expected === undefined) {
      throw new Error(`官方示例缺少期望输出：${problem.id} 示例 ${index + 1}`)
    }

    if (meta.systemdesign) {
      if (!Array.isArray(example.input.operations) || !Array.isArray(example.input.arguments)) {
        throw new Error(`设计题示例格式错误：${problem.id} 示例 ${index + 1}`)
      }
      if (example.input.operations.length !== example.input.arguments.length) {
        throw new Error(`设计题操作与参数数量不一致：${problem.id} 示例 ${index + 1}`)
      }
      continue
    }

    for (const param of meta.params) {
      if (!(param.name in example.input)) {
        throw new Error(`官方示例缺少参数 ${param.name}：${problem.id} 示例 ${index + 1}`)
      }
    }
  }
}

function createTestFile(problem, solutionFileName, entryName, meta, examples) {
  return [
    GENERATED_MARKER,
    "const path = require('node:path')",
    "const { defineOfficialTests } = require('../../leetcode-test-utils')",
    '',
    'defineOfficialTests({',
    `  id: ${problem.id},`,
    `  title: ${JSON.stringify(problem.title)},`,
    `  solutionFile: path.join(__dirname, ${JSON.stringify(solutionFileName)}),`,
    `  entryName: ${JSON.stringify(entryName)},`,
    `  meta: ${JSON.stringify(simplifyMeta(meta), null, 2).replace(/\n/g, '\n  ')},`,
    `  examples: ${JSON.stringify(examples, null, 2).replace(/\n/g, '\n  ')},`,
    '})',
    '',
  ].join('\n')
}

async function main() {
  const manifest = JSON.parse(await fs.readFile(path.join(ROOT, 'hot100.json'), 'utf8'))
  const details = await fetchDetails(manifest.problems)
  let updated = 0

  for (const problem of manifest.problems) {
    const solutionFile = path.join(ROOT, problem.solutionFile)
    const testFile = path.join(ROOT, problem.testFile)
    const source = await fs.readFile(solutionFile, 'utf8')
    const oldTest = await fs.readFile(testFile, 'utf8')

    if (!source.includes(TODO_MARKER) && !oldTest.includes(GENERATED_MARKER)) {
      continue
    }

    const detail = details.get(problem.id)
    const entryName = detail.meta.name || detail.meta.classname
    const examples = parseExamples(problem.id, detail.content, detail.meta)
    if (!examples.length) {
      throw new Error(`未解析到官方示例：${problem.id} ${problem.title}`)
    }
    validateExamples(problem, detail.meta, examples)

    await fs.writeFile(
      testFile,
      createTestFile(problem, path.basename(solutionFile), entryName, detail.meta, examples),
    )
    updated++
  }

  console.log(`官方示例测试同步完成：更新 ${updated} 个测试文件。`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
