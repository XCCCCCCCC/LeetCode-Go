const fs = require('node:fs')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

const root = path.resolve(__dirname, '..')
const leetcodeDir = path.join(root, 'leetcode')
const input = process.argv[2]

if (!input || !/^\d+$/.test(input)) {
  console.error('用法：npm run test:problem -- <题号>')
  process.exit(1)
}

const id = input.padStart(4, '0')
const directoryName = fs.readdirSync(leetcodeDir).find((name) => name.startsWith(`${id}.`))

if (!directoryName) {
  console.error(`未找到题号 ${input} 的目录`)
  process.exit(1)
}

const directory = path.join(leetcodeDir, directoryName)
const testFile = fs.readdirSync(directory).find((name) => name.endsWith('.test.js'))

if (!testFile) {
  console.error(`未找到测试文件：${directoryName}`)
  process.exit(1)
}

console.log(`运行：${directoryName}/${testFile}`)
const result = spawnSync(process.execPath, ['--test', path.join(directory, testFile)], {
  cwd: root,
  env: {
    ...process.env,
    LEETCODE_FORCE_TEST: '1',
  },
  stdio: 'inherit',
})

process.exit(result.status ?? 1)
