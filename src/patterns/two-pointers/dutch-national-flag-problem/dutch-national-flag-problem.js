/**
 * Sorts the array in-place
 * @constructor
 * @param {Array.<number>} arr - array of 1s, 2s and 3s
 */
const dutchNationalFlagProblem = (arr) => {
  let left = 0
  let right = arr.length - 1

  let i = 0

  while (i <= right) {
    if (arr[i] === 0) {
      ;[arr[i], arr[left]] = [arr[left], arr[i]]
      left++
      i++
    } else if (arr[i] === 2) {
      ;[arr[i], arr[right]] = [arr[right], arr[i]]
      right--
    } else {
      i++
    }
  }

  return arr
}

module.exports = dutchNationalFlagProblem
