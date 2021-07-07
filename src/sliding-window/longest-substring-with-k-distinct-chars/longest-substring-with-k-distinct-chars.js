/**
 * Returns the longest substring size with no more than k distinct characters
 * @constructor
 * @param {string} str - string
 * @param {Number} k - maximum distinct characters count
 */
const longestSubstringWithKDistinctChars = (str, k) => {
  const chars = {}
  let charsCount = 0
  let maxLength = 0

  let windowStart = 0
  let windowEnd = 0

  while (windowEnd < str.length) {
    if (str[windowEnd] in chars) {
      chars[str[windowEnd]] += 1
    } else if (charsCount < k) {
      chars[str[windowEnd]] = 1
      charsCount += 1
    } else {
      maxLength = Math.max(windowEnd - windowStart, maxLength)

      chars[str[windowEnd]] = 1
      charsCount += 1

      while (charsCount > k) {
        if (chars[str[windowStart]] === 1) {
          delete chars[str[windowStart]]
          charsCount -= 1
        } else {
          chars[str[windowStart]] -= 1
        }
        windowStart += 1
      }
    }

    windowEnd += 1
  }

  return maxLength
}

module.exports = longestSubstringWithKDistinctChars
