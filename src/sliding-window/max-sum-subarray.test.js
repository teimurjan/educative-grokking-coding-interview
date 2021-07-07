const maxSumSubArray = require("./max-sum-subarray")

describe("maxSumSubArray", () => {
  it("arr=[2, 1, 5, 1, 3, 2], k=3", () => {
    expect(maxSumSubArray([2, 1, 5, 1, 3, 2], 3)).toBe(9)
  })

  it("arr=[2, 3, 4, 1, 5], k=2", () => {
    expect(maxSumSubArray([2, 3, 4, 1, 5], 2)).toBe(7)
  })
})
