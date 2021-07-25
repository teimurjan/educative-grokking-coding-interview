const path = require("path")
const fs = require("fs")

const sections = ["sliding-window", "two-pointers", "fast-and-slow-pointers"]

sections.forEach((section) => {
  const sectionPath = path.resolve(__dirname, section)

  const testCases = fs.readdirSync(sectionPath).map((packagePath) => {
    const testFn = require(path.join(sectionPath, packagePath))
    const testData = require(path.join(sectionPath, packagePath, "data.js"))

    return { data: testData, fn: testFn }
  })

  describe(section, () => {
    testCases.forEach((testCase) => {
      describe(testCase.fn.name, () => {
        testCase.data.forEach((testCaseData) => {
          const testCaseName = testCaseData.name
            ? testCaseData.name
            : `returns ${JSON.stringify(
                testCaseData.output
              )} when input is ${JSON.stringify(testCaseData.input)}`

          it(testCaseName, () => {
            expect(testCase.fn(...testCaseData.input)).toStrictEqual(
              testCaseData.output
            )
          })
        })
      })
    })
  })
})
