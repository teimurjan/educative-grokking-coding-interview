/**
 * Returns true if string contains any permutation of the pattern otherwise false
 * @constructor
 * @param {str} str - string
 * @param {str} pattern - permutation pattern
 */
const longestSubstringAfterReplacement = (str, pattern) => {
  let desiredMatches = 0
  const patternMap = {}
  for (let i = 0; i < pattern.length; i++) {
    patternMap[pattern[i]] = patternMap[pattern[i]] ? patternMap[pattern[i]] + 1 : 1
    desiredMatches += 1
  }

  let start = 0
  let end = 0
  let currMatches = 0

  while (end < str.length) {
    if (str[end] in patternMap && patternMap[str[end]] > 0) {
      currMatches += 1
      patternMap[str[end]] -= 1
    } else if (patternMap[str[end]] === 0) {
      while (patternMap[str[end]] === 0) {
        patternMap[str[start]] += 1
        currMatches -= 1
        start += 1
      }
    } else {
      currMatches = 0
      start = end + 1
    }

    if (currMatches === desiredMatches) {
      return true
    }

    end += 1
  }

  return false
}

module.exports = longestSubstringAfterReplacement
