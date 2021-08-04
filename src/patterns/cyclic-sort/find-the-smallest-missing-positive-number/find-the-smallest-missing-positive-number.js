/**
 * Finds a number the smallest positive number that is missing
 * @constructor
 * @param {Array.<number>} arr - array of both positive and negative numbers
 */
const findTheSmallestMissingPositiveNumber = (arr) => {
  let i = 0

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (arr[i] > 0 && arr[i] < arr.length && i !== correctIndex) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  for (let k = 0; k < arr.length; k++) {
    const correctIndex = arr[k] - 1
    if (k !== correctIndex) {
      return k + 1
    }
  }

  return arr.length + 1
}

module.exports = findTheSmallestMissingPositiveNumber
