/**
 * Returns the longest substring of distinct characters after replacing k chars
 * @constructor
 * @param {string} str - string
 * @param {number} k - allowed numbers to replace count
 */
const longestSubstringAfterReplacement = (str, k) => {
  const charsCount = {}
  let maxLength = 0
  let start = 0
  let end = 0
  let maxRepeatLetterCount = 0

  while (end < str.length) {
    if (str[end] in charsCount) {
      charsCount[str[end]] += 1
    } else {
      charsCount[str[end]] = 1
    }

    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, charsCount[str[end]])

    if (end - start + 1 - maxRepeatLetterCount > k) {
      charsCount[str[start]] -= 1
      start += 1
    }

    maxLength = Math.max(maxLength, end - start + 1);

    end += 1
  }

  return maxLength
}

module.exports = longestSubstringAfterReplacement
