const fs = require('node:fs/promises')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const LEETCODE_DIR = path.join(ROOT, 'leetcode')
const SOURCE_URL = 'https://leetcode.cn/studyplan/top-100-liked/'
const GRAPHQL_URL = 'https://leetcode.cn/graphql/'
const META_START = '<!-- hot100-meta:start -->'
const META_END = '<!-- hot100-meta:end -->'
const NOTES_START = '<!-- hot100-training:start -->'
const NOTES_END = '<!-- hot100-training:end -->'
const TODO_MARKER = '// TODO(hot100): 完成解法后删除本行。'

const difficultyMap = {
  EASY: '简单',
  MEDIUM: '中等',
  HARD: '困难',
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      'user-agent': 'Mozilla/5.0 LeetCode-Local-Practice',
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`请求失败 ${response.status}: ${url}`)
  }

  return response.text()
}

function parsePlan(html) {
  const startTag = '<script id="__NEXT_DATA__" type="application/json">'
  const start = html.indexOf(startTag)
  const end = html.indexOf('</script>', start)

  if (start === -1 || end === -1) {
    throw new Error('未在官方页面中找到 __NEXT_DATA__')
  }

  const data = JSON.parse(html.slice(start + startTag.length, end))
  const plan = data.props.pageProps.dehydratedState.queries[0].state.data.studyPlanV2Detail
  const problems = []

  for (const group of plan.planSubGroups) {
    for (const question of group.questions) {
      problems.push({
        id: Number(question.questionFrontendId),
        title: question.translatedTitle,
        titleSlug: question.titleSlug,
        difficulty: question.difficulty,
        category: group.name,
        tags: question.topicTags.map((tag) => tag.nameTranslated || tag.name),
      })
    }
  }

  if (problems.length !== 100) {
    throw new Error(`官方 Hot 100 数量异常：${problems.length}`)
  }

  return {
    title: plan.title,
    slug: plan.slug,
    problems,
  }
}

async function fetchJavaScriptSnippets(problems) {
  const snippets = new Map()
  const batchSize = 25

  for (let offset = 0; offset < problems.length; offset += batchSize) {
    const batch = problems.slice(offset, offset + batchSize)
    const fields = batch
      .map((problem, index) => {
        return `q${index}: question(titleSlug: ${JSON.stringify(problem.titleSlug)}) { codeSnippets { langSlug code } }`
      })
      .join('\n')
    const query = `query hot100Snippets {\n${fields}\n}`
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 LeetCode-Local-Practice',
        referer: SOURCE_URL,
      },
      body: JSON.stringify({ query }),
    })

    if (!response.ok) {
      throw new Error(`代码片段请求失败 ${response.status}`)
    }

    const result = await response.json()
    if (result.errors) {
      throw new Error(JSON.stringify(result.errors))
    }

    batch.forEach((problem, index) => {
      const codeSnippet = result.data[`q${index}`]?.codeSnippets?.find((item) => item.langSlug === 'javascript')
      if (!codeSnippet) {
        throw new Error(`未找到 JavaScript 代码片段：${problem.id} ${problem.title}`)
      }
      snippets.set(problem.id, codeSnippet.code.trimEnd())
    })
  }

  return snippets
}

function padId(id) {
  return String(id).padStart(4, '0')
}

function safeName(title) {
  return title
    .replace(/\s+/g, '')
    .replace(/[\\/:*?"<>|]/g, '-')
}

function replaceOrPrependBlock(content, startMarker, endMarker, block) {
  const start = content.indexOf(startMarker)
  const end = content.indexOf(endMarker)

  if (start !== -1 && end !== -1 && end > start) {
    return content.slice(0, start) + block + content.slice(end + endMarker.length)
  }

  return `${block}\n\n${content}`.trimEnd() + '\n'
}

function appendBlock(content, marker, block) {
  if (content.includes(marker)) {
    return content
  }
  return `${content.trimEnd()}\n\n${block}\n`
}

function createMetaBlock(problem, status) {
  const officialUrl = `https://leetcode.cn/problems/${problem.titleSlug}/`
  return [
    META_START,
    `> Hot 100 · ${problem.category} · ${difficultyMap[problem.difficulty]} · ${status}`,
    `> [${problem.id}. ${problem.title}](${officialUrl}) · 标签：${problem.tags.join(' / ')}`,
    META_END,
  ].join('\n')
}

function createTrainingBlock() {
  return [
    NOTES_START,
    '## 训练复盘',
    '',
    '- 训练日期：',
    '- 结果：未开始 / 独立通过 / 提示后通过 / 题解后复现 / 未完成',
    '- 用时：',
    '- 提交次数：',
    '- 核心模型：',
    '- 核心不变量：',
    '- 时间复杂度：',
    '- 空间复杂度：',
    '- 错误标签：模型识别 / 不变量 / 边界条件 / 实现错误 / 复杂度 / 调试低效',
    '- 最小反例：',
    '- D+1：',
    '- D+3：',
    '- D+7：',
    NOTES_END,
  ].join('\n')
}

function createNewReadme(problem, status) {
  const officialUrl = `https://leetcode.cn/problems/${problem.titleSlug}/`
  return [
    createMetaBlock(problem, status),
    '',
    `# [${problem.id}. ${problem.title}](${officialUrl})`,
    '',
    '## 题意摘要',
    '',
    '> 用自己的话概括输入、输出和约束，不复制整段题面。',
    '',
    '## 解题思路',
    '',
    '- 暴力解法：',
    '- 优化方向：',
    '- 核心不变量：',
    '',
    '## 边界条件',
    '',
    '- ',
    '',
    createTrainingBlock(),
    '',
  ].join('\n')
}

function findEntryName(snippet) {
  return snippet.match(/\bvar\s+([A-Za-z_$][\w$]*)\s*=\s*function/)?.[1] || 'solution'
}

function createTodoTest(problem, solutionFileName, entryName) {
  return [
    "const test = require('node:test')",
    "const assert = require('node:assert/strict')",
    "const path = require('node:path')",
    "const { loadSolution } = require('../../leetcode-test-utils')",
    '',
    `// const { ${entryName} } = loadSolution(path.join(__dirname, ${JSON.stringify(solutionFileName)}), [${JSON.stringify(entryName)}])`,
    '// 完成解法后，删除 test.todo，并按下面格式增加官方示例、边界用例和最小反例。',
    `test.todo('${problem.id}. ${problem.title}：完成解法后补充至少 3 个测试用例')`,
    '',
    "// test('官方示例', () => {",
    '//   const actual = undefined',
    '//   const expected = undefined',
    '//   assert.deepEqual(actual, expected)',
    '// })',
    '',
  ].join('\n')
}

function hasImplementation(source) {
  if (source.includes(TODO_MARKER)) {
    return false
  }

  const code = source
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')

  return /\b(return|if|for|while|switch|throw|new\s+(Map|Set)|push|pop|shift|unshift|sort|reduce|splice)\b/.test(code)
}

async function pathExists(target) {
  try {
    await fs.access(target)
    return true
  } catch {
    return false
  }
}

async function readIfExists(target) {
  try {
    return await fs.readFile(target, 'utf8')
  } catch (error) {
    if (error.code === 'ENOENT') return ''
    throw error
  }
}

async function findExistingDirectories() {
  const entries = await fs.readdir(LEETCODE_DIR, { withFileTypes: true })
  const result = new Map()

  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const match = entry.name.match(/^(\d{4})\./)
    if (!match) continue
    result.set(Number(match[1]), entry.name)
  }

  return result
}

async function findSolutionFile(directory, problem) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const candidates = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => name.endsWith('.js'))
    .filter((name) => !name.endsWith('.test.js') && name !== 'repeat.js')

  if (candidates.length > 0) {
    return path.join(directory, candidates[0])
  }

  return path.join(directory, `${safeName(problem.title)}.js`)
}

async function scaffoldProblem(problem, snippet, existingDirectories) {
  const directoryName = existingDirectories.get(problem.id) || `${padId(problem.id)}.${safeName(problem.title)}`
  const directory = path.join(LEETCODE_DIR, directoryName)
  const wasExisting = await pathExists(directory)
  await fs.mkdir(directory, { recursive: true })

  const solutionFile = await findSolutionFile(directory, problem)
  const solutionExists = await pathExists(solutionFile)
  if (!solutionExists) {
    await fs.writeFile(solutionFile, `${TODO_MARKER}\n${snippet}\n`)
  }

  const solutionBase = path.basename(solutionFile, '.js')
  const testFile = path.join(directory, `${solutionBase}.test.js`)
  let solution = await readIfExists(solutionFile)
  if (!hasImplementation(solution) && !solution.includes(TODO_MARKER)) {
    solution = `${TODO_MARKER}\n${solution}`
    await fs.writeFile(solutionFile, solution)
  }

  const testExists = await pathExists(testFile)
  const oldTestContent = await readIfExists(testFile)
  const looksCopiedFromAnotherProblem = oldTestContent.includes('loadSolution') && !oldTestContent.includes(path.basename(solutionFile))
  if (!testExists || looksCopiedFromAnotherProblem || oldTestContent.includes('完成解法后补充至少 3 个测试用例')) {
    await fs.writeFile(testFile, createTodoTest(problem, path.basename(solutionFile), findEntryName(snippet)))
  }

  const testContent = await readIfExists(testFile)
  const status = !hasImplementation(solution) ? '未开始' : testContent.includes('test.todo') ? '待补测试' : '已有代码与测试'

  const readmeFile = path.join(directory, 'README.md')
  const oldReadme = await readIfExists(readmeFile)
  let readme = oldReadme || createNewReadme(problem, status)
  readme = replaceOrPrependBlock(readme, META_START, META_END, createMetaBlock(problem, status))
  readme = appendBlock(readme, NOTES_START, createTrainingBlock())
  await fs.writeFile(readmeFile, readme)

  return {
    ...problem,
    status,
    directory: path.relative(ROOT, directory),
    solutionFile: path.relative(ROOT, solutionFile),
    testFile: path.relative(ROOT, testFile),
    created: !wasExisting,
  }
}

function createIndex(plan, records) {
  const counts = records.reduce((result, record) => {
    result[record.status] = (result[record.status] || 0) + 1
    return result
  }, {})
  const lines = [
    '# LeetCode Hot 100 训练索引',
    '',
    `> 来源：[力扣官方 Hot 100 学习计划](${SOURCE_URL})`,
    `> 同步日期：${new Date().toISOString().slice(0, 10)}`,
    '',
    `- 总题数：${records.length}`,
    `- 已有代码与测试：${counts['已有代码与测试'] || 0}`,
    `- 待补测试：${counts['待补测试'] || 0}`,
    `- 未开始：${counts['未开始'] || 0}`,
    '',
  ]

  for (const group of plan.problems.reduce((groups, problem) => {
    const current = groups.find((item) => item.name === problem.category)
    if (current) current.problems.push(problem)
    else groups.push({ name: problem.category, problems: [problem] })
    return groups
  }, [])) {
    lines.push(`## ${group.name}`, '')
    lines.push('| 题号 | 题目 | 难度 | 状态 |')
    lines.push('|---:|---|---|---|')
    for (const problem of group.problems) {
      const record = records.find((item) => item.id === problem.id)
      const icon = record.status === '未开始' ? '⬜' : record.status === '待补测试' ? '🟡' : '✅'
      lines.push(`| ${problem.id} | [${problem.title}](${record.directory}/README.md) | ${difficultyMap[problem.difficulty]} | ${icon} ${record.status} |`)
    }
    lines.push('')
  }

  return lines.join('\n')
}

async function main() {
  await fs.mkdir(LEETCODE_DIR, { recursive: true })
  const html = await fetchText(SOURCE_URL)
  const plan = parsePlan(html)
  const snippets = await fetchJavaScriptSnippets(plan.problems)
  const existingDirectories = await findExistingDirectories()
  const records = []

  for (const problem of plan.problems) {
    records.push(await scaffoldProblem(problem, snippets.get(problem.id), existingDirectories))
  }

  const trainingBlock = createTrainingBlock()
  const allDirectories = await fs.readdir(LEETCODE_DIR, { withFileTypes: true })
  for (const entry of allDirectories) {
    if (!entry.isDirectory()) continue
    const readmeFile = path.join(LEETCODE_DIR, entry.name, 'README.md')
    const readme = await readIfExists(readmeFile)
    if (readme && !readme.includes(NOTES_START)) {
      await fs.writeFile(readmeFile, appendBlock(readme, NOTES_START, trainingBlock))
    }
  }

  const manifest = {
    source: SOURCE_URL,
    syncedAt: new Date().toISOString(),
    title: plan.title,
    slug: plan.slug,
    problems: records,
  }

  await fs.writeFile(path.join(ROOT, 'hot100.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  await fs.writeFile(path.join(ROOT, 'HOT100.md'), `${createIndex(plan, records)}\n`)

  const created = records.filter((record) => record.created).length
  console.log(`Hot 100 同步完成：100 题，新建 ${created} 个目录，复用 ${100 - created} 个现有目录。`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
