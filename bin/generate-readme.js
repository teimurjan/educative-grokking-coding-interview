#!/usr/bin/env node
const fs = require("fs")
const path = require("path")

const getPatterns = () => {
  const dirPath = path.resolve(__dirname)
  const patternsPath = path.join(dirPath, "../src/patterns")

  return fs.readdirSync(patternsPath).map((patternName) => {
    const problemsPath = path.join(patternsPath, patternName)
    const problems = fs.readdirSync(problemsPath).map((problemName) => ({
      title: toPascalCase(problemName),
      filePath: path.join(
        "/src/patterns",
        patternName,
        problemName,
        `${problemName}.js`
      ),
    }))

    return {
      title: toPascalCase(patternName),
      problems,
    }
  })
}

const patternToMd = (pattern) => {
  return `## ${pattern.title}\n\n${pattern.problems
    .map((problem) => `* [${problem.title}](${problem.filePath})`)
    .join("\n")}\n`
}

const clearAndUpper = (text) => text.replace(/-/, " ").toUpperCase()
const toPascalCase = (text) => text.replace(/(^\w|-\w)/g, clearAndUpper)

const generateReadme = () => {
  const dirPath = path.resolve(__dirname)
  const readmePath = path.join(dirPath, "../README.md")

  fs.writeFileSync(
    readmePath,
    `![main workflow](https://github.com/teimurjan/educative-grokking-coding-interview/actions/workflows/main.yml/badge.svg)

# About

This repository contains solutions for [Grokking the Coding Interview: Patterns for Coding Question](https://www.educative.io/courses/grokking-the-coding-interview) from https://educative.io.

# Get started

## Install dependencies

The problems are solved without any external dependency (required data structures and helper functions lay in [the utils folder](/src/utils/index.js)). The project uses \`jest\` and \`prettier\` only to have smooth development.

\`\`\`sh
npm install
\`\`\`

## Run tests

\`\`\`sh
npm test
\`\`\`

# Problems

${getPatterns().map(patternToMd).join("\n")}
  `
  )
}

generateReadme()
