const maxSumSubarray = (arr, k) => {
  let localMaxSum = 0
  let maxSum = Number.MIN_VALUE
  let windowEnd = k - 1

  arr.forEach((element, i) => {
    localMaxSum += element

    if (i == windowEnd) {
      maxSum = Math.max(localMaxSum, maxSum)
      localMaxSum -= arr[windowEnd - k + 1]
      windowEnd += 1
    }
  })

  return maxSum
}

module.exports = maxSumSubarray
