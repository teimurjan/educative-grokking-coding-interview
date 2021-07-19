const path = require("path")
const fs = require("fs")

const sections = ["sliding-window", "two-pointers"]

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
        testCase.data.forEach((testCaseData) => {
          const serializedInput = JSON.stringify(testCaseData.input)
          const serializedOutput = JSON.stringify(testCaseData.output)

          it(`returns ${serializedOutput} when input is ${serializedInput}`, () => {
            expect(testCase.fn(...testCaseData.input)).toStrictEqual(
              testCaseData.output
            )
          })
        })
      })
    })
  })
})
