const path = require("path")
const fs = require("fs")

const sections = ["sliding-window"]

sections.forEach((section) => {
  const sectionPath = path.resolve(__dirname, section)

  const testCases = fs.readdirSync(sectionPath).map((packagePath) => {
    const testFn = require(path.join(sectionPath, packagePath))
    const testData = require(path.join(sectionPath, packagePath, "test.json"))

    return { data: testData, fn: testFn }
  })

  describe(section, () => {
    testCases.forEach((testCase) => {
      describe(testCase.fn.name, () => {
        testCase.data.forEach((testCaseData, i) => {
          it(`works correctly when args=[${testCaseData.args.join(
            ", "
          )}]`, () => {
            expect(testCase.fn(...testCaseData.args)).toBe(testCaseData.result)
          })
        })
      })
    })
  })
})
