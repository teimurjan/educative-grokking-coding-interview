/**
 * Returns the longest subarray length of ones after replacing k zeroes
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} k - allowed replacements count
 */
const longestSubstringAfterReplacement = (arr, k) => {
  let maxLength = 0
  let start = 0
  let end = 0
  let zeroesCount = 0

  while (end < arr.length) {
    if (arr[end] === 0) {
      while (zeroesCount === k) {
        if (arr[start] === 0) {
          zeroesCount -= 1
        }
        start += 1
      }

      zeroesCount += 1
    }

    maxLength = Math.max(end - start + 1, maxLength)


    end += 1
  }

  return maxLength
}

module.exports = longestSubstringAfterReplacement
