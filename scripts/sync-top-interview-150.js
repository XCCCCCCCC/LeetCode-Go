const fs = require('node:fs/promises')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const LEETCODE_DIR = path.join(ROOT, 'leetcode')
const SOURCE_URL = 'https://leetcode.cn/studyplan/top-interview-150/'
const GRAPHQL_URL = 'https://leetcode.cn/graphql/'
const META_START = '<!-- top150-meta:start -->'
const META_END = '<!-- top150-meta:end -->'
const TODO_MARKER = '// TODO(interview150): 完成解法后删除本行。'

const difficultyMap = { EASY: '简单', MEDIUM: '中等', HARD: '困难' }

async function fetchPlan() {
  const response = await fetch(SOURCE_URL, { headers: { 'user-agent': 'Mozilla/5.0 LeetCode-Local-Practice' } })
  if (!response.ok) throw new Error(`请求失败 ${response.status}: ${SOURCE_URL}`)
  const html = await response.text()
  const marker = '<script id="__NEXT_DATA__" type="application/json">'
  const start = html.indexOf(marker)
  const end = html.indexOf('</script>', start)
  if (start === -1 || end === -1) throw new Error('未在官方页面中找到 __NEXT_DATA__')

  const data = JSON.parse(html.slice(start + marker.length, end))
  const detail = data.props.pageProps.dehydratedState.queries
    .map((query) => query.state?.data?.studyPlanV2Detail)
    .find(Boolean)
  if (!detail) throw new Error('未找到 Top Interview 150 题单数据')

  const problems = []
  for (const group of detail.planSubGroups) {
    for (const question of group.questions) {
      problems.push({
        id: Number(question.questionFrontendId),
        title: question.translatedTitle,
        titleSlug: question.titleSlug,
        difficulty: question.difficulty,
        category: group.name,
        tags: question.topicTags.map((tag) => tag.nameTranslated || tag.name).filter(Boolean),
      })
    }
  }
  if (problems.length !== 150) throw new Error(`官方 Top Interview 150 数量异常：${problems.length}`)
  if (new Set(problems.map((problem) => problem.id)).size !== 150) throw new Error('官方题单存在重复题号')
  return { title: detail.title || '经典面试 150 题', slug: detail.slug, problems }
}

function padId(id) { return String(id).padStart(4, '0') }
function safeName(title) { return title.replace(/\s+/g, '').replace(/[\\/:*?"<>|]/g, '-') }
function findEntryName(snippet) {
  return snippet.match(/\bvar\s+([A-Za-z_$][\w$]*)\s*=\s*function/)?.[1] || 'solution'
}
function replaceBlock(content, block) {
  const start = content.indexOf(META_START)
  const end = content.indexOf(META_END)
  if (start !== -1 && end > start) return content.slice(0, start) + block + content.slice(end + META_END.length)
  return `${block}\n\n${content.trimStart()}`
}
function metaBlock(problem, status) {
  const url = `https://leetcode.cn/problems/${problem.titleSlug}/`
  return [
    META_START,
    `> Top Interview 150 · ${problem.category} · ${difficultyMap[problem.difficulty]} · ${status}`,
    `> [${problem.id}. ${problem.title}](${url}) · 标签：${problem.tags.join(' / ')}`,
    META_END,
  ].join('\n')
}
function trainingBlock() {
  return [
    '<!-- top150-training:start -->',
    '## 面试 150 训练复盘',
    '',
    '- 训练日期：',
    '- 结果：未开始 / 独立通过 / 提示后通过 / 题解后复现 / 未完成',
    '- 用时：',
    '- 提交次数：',
    '- 核心模型：',
    '- 核心不变量：',
    '- 时间复杂度：',
    '- 空间复杂度：',
    '- 错误标签：',
    '- 最小反例：',
    '<!-- top150-training:end -->',
  ].join('\n')
}
function todoTest(problem, solutionFileName, entryName) {
  return [
    "const test = require('node:test')",
    '',
    `// 完成解法后删除 TODO(interview150)，并为 ${problem.id}. ${problem.title} 补充官方示例和边界测试。`,
    `test.todo('${problem.id}. ${problem.title}：完成解法后补充测试用例')`,
    '',
  ].join('\n')
}
async function readIfExists(file) {
  try { return await fs.readFile(file, 'utf8') } catch (error) {
    if (error.code === 'ENOENT') return ''
    throw error
  }
}
async function existingDirectories() {
  const entries = await fs.readdir(LEETCODE_DIR, { withFileTypes: true })
  const result = new Map()
  for (const entry of entries) {
    if (!entry.isDirectory()) continue
    const match = entry.name.match(/^(\d{4})\./)
    if (match) result.set(Number(match[1]), entry.name)
  }
  return result
}
async function fetchJavaScriptSnippets(problems) {
  const snippets = new Map()
  const batchSize = 25
  for (let offset = 0; offset < problems.length; offset += batchSize) {
    const batch = problems.slice(offset, offset + batchSize)
    const fields = batch.map((problem, index) => {
      return `q${index}: question(titleSlug: ${JSON.stringify(problem.titleSlug)}) { codeSnippets { langSlug code } }`
    }).join('\n')
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'Mozilla/5.0 LeetCode-Local-Practice',
        referer: SOURCE_URL,
      },
      body: JSON.stringify({ query: `query topInterview150Snippets {\n${fields}\n}` }),
    })
    if (!response.ok) throw new Error(`代码片段请求失败 ${response.status}`)
    const result = await response.json()
    if (result.errors) throw new Error(JSON.stringify(result.errors))
    batch.forEach((problem, index) => {
      const snippet = result.data[`q${index}`]?.codeSnippets?.find((item) => item.langSlug === 'javascript')?.code
      if (!snippet) throw new Error(`未找到 JavaScript 代码片段：${problem.id} ${problem.title}`)
      snippets.set(problem.id, snippet.trimEnd())
    })
  }
  return snippets
}
async function findSolutionFile(directory, problem) {
  const entries = await fs.readdir(directory, { withFileTypes: true })
  const candidate = entries.find((entry) => {
    return entry.isFile() && entry.name.endsWith('.js') && !entry.name.endsWith('.test.js') && entry.name !== 'repeat.js'
  })
  return path.join(directory, candidate?.name || `${safeName(problem.title)}.js`)
}
async function scaffold(problem, snippet, directories) {
  const directoryName = directories.get(problem.id) || `${padId(problem.id)}.${safeName(problem.title)}`
  const directory = path.join(LEETCODE_DIR, directoryName)
  await fs.mkdir(directory, { recursive: true })
  const solutionFile = await findSolutionFile(directory, problem)
  const solutionName = path.basename(solutionFile)
  const solution = await readIfExists(solutionFile)
  if (!solution || (solution.includes(TODO_MARKER) && solution.includes('// TODO: implement'))) {
    await fs.writeFile(solutionFile, `${TODO_MARKER}\n${snippet}\n`)
  }
  const testFile = path.join(directory, `${path.basename(solutionFile, '.js')}.test.js`)
  if (!(await readIfExists(testFile))) {
    await fs.writeFile(testFile, todoTest(problem, solutionName, findEntryName(snippet)))
  }
  const readmeFile = path.join(directory, 'README.md')
  const oldReadme = await readIfExists(readmeFile)
  const source = await readIfExists(solutionFile)
  const status = source.includes(TODO_MARKER) ? '未开始' : '已有代码'
  const readme = replaceBlock(oldReadme || `# [${problem.id}. ${problem.title}](${`https://leetcode.cn/problems/${problem.titleSlug}/`})\n\n## 解题思路\n\n`, metaBlock(problem, status))
  const withTraining = readme.includes('<!-- top150-training:start -->') ? readme : `${readme.trimEnd()}\n\n${trainingBlock()}\n`
  await fs.writeFile(readmeFile, withTraining)
  return { ...problem, status, directory: path.relative(ROOT, directory), solutionFile: path.relative(ROOT, solutionFile), testFile: path.relative(ROOT, testFile) }
}
function createIndex(plan, records) {
  const counts = records.reduce((out, item) => { out[item.status] = (out[item.status] || 0) + 1; return out }, {})
  const lines = [
    '# LeetCode 经典面试 150 训练索引', '',
    `> 来源：[力扣官方经典面试 150 题学习计划](${SOURCE_URL})`,
    `> 同步日期：${new Date().toISOString().slice(0, 10)}`, '',
    `- 总题数：${records.length}`,
    `- 已有代码：${counts['已有代码'] || 0}`,
    `- 未开始：${counts['未开始'] || 0}`, '',
  ]
  const groups = []
  for (const problem of plan.problems) {
    let group = groups.find((item) => item.name === problem.category)
    if (!group) { group = { name: problem.category, problems: [] }; groups.push(group) }
    group.problems.push(problem)
  }
  for (const group of groups) {
    lines.push(`## ${group.name}`, '', '| 题号 | 题目 | 难度 | 状态 |', '|---:|---|---|---|')
    for (const problem of group.problems) {
      const record = records.find((item) => item.id === problem.id)
      const icon = record.status === '未开始' ? '⬜' : '✅'
      lines.push(`| ${problem.id} | [${problem.title}](${record.directory}/README.md) | ${difficultyMap[problem.difficulty]} | ${icon} ${record.status} |`)
    }
    lines.push('')
  }
  return lines.join('\n')
}
async function main() {
  await fs.mkdir(LEETCODE_DIR, { recursive: true })
  const plan = await fetchPlan()
  const snippets = await fetchJavaScriptSnippets(plan.problems)
  const directories = await existingDirectories()
  const records = []
  for (const problem of plan.problems) records.push(await scaffold(problem, snippets.get(problem.id), directories))
  const manifest = { source: SOURCE_URL, syncedAt: new Date().toISOString(), title: plan.title, slug: plan.slug, problems: records }
  await fs.writeFile(path.join(ROOT, 'top-interview-150.json'), `${JSON.stringify(manifest, null, 2)}\n`)
  await fs.writeFile(path.join(ROOT, 'TOP_INTERVIEW_150.md'), `${createIndex(plan, records)}\n`)
  console.log(`经典面试 150 同步完成：${records.length} 题，复用已有目录 ${records.filter((item) => directories.get(item.id)).length} 个。`)
}
main().catch((error) => { console.error(error); process.exitCode = 1 })
