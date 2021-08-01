/**
 * Returns the longest substring of distinct characters
 * @constructor
 * @param {string} str - string
 */
const noRepeatSubstring = (str) => {
  const indexOfChar = {}
  let maxLength = 0
  let start = 0
  let end = 0

  while (end < str.length) {
    if (str[end] in indexOfChar) {
      start = Math.max(start, indexOfChar[str[end]] + 1)
    }

    indexOfChar[str[end]] = end
    maxLength = Math.max(end - start + 1, maxLength)

    end += 1
  }

  return maxLength
}

module.exports = noRepeatSubstring
