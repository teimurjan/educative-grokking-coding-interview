/**
 * Returns the smallest subarray size whose sum is greater or equalt to s
 * @constructor
 * @param {Number} s - minimum subarray sum
 * @param {Array.<Number>} arr - array
 */
const smallestSubarrayWithAGivenSum = (s, arr) => {
  let windowStart = 0
  let windowEnd = 0
  let localSum = 0
  let arrSize = Number.MAX_VALUE

  while (windowEnd < arr.length) {
    localSum += arr[windowEnd]

    while (localSum >= s) {
      arrSize = Math.min(arrSize, windowEnd + 1 - windowStart)
      localSum -= arr[windowStart]
      windowStart += 1
    }

    windowEnd += 1
  }

  return arrSize
}

module.exports = smallestSubarrayWithAGivenSum
