const path = require("path")
const fs = require("fs")

const PATTERNS_FOLDER_PATH = "patterns"

const isClass = (func) => {
  return (
    typeof func === "function" &&
    /^class\s/.test(Function.prototype.toString.call(func))
  )
}

fs.readdirSync(path.resolve(__dirname, PATTERNS_FOLDER_PATH)).forEach(
  (pattern) => {
    const patternPath = path.resolve(__dirname, PATTERNS_FOLDER_PATH, pattern)

    const testCases = fs.readdirSync(patternPath).map((packagePath) => {
      const testFn = require(path.join(patternPath, packagePath))
      const testData = require(path.join(patternPath, packagePath, "data.js"))

      return { data: testData, fn: testFn }
    })

    describe(pattern, () => {
      testCases.forEach((testCase) => {
        describe(testCase.fn.name, () => {
          testCase.data.forEach((testCaseData) => {
            const testCaseName = testCaseData.name
              ? testCaseData.name
              : `returns ${JSON.stringify(
                  testCaseData.output
                )} when input is ${JSON.stringify(testCaseData.input)}`

            it(testCaseName, () => {
              if (isClass(testCase.fn)) {
                const instance = new testCase.fn()

                const actualOutput = testCaseData.input.reduce(
                  (output, input) => [...output, input(instance)],
                  []
                )
                expect(actualOutput).toStrictEqual(testCaseData.output)
              } else {
                const actualOutput = testCase.fn(...testCaseData.input)
                expect(actualOutput).toStrictEqual(testCaseData.output)
              }
            })
          })
        })
      })
    })
  }
)
