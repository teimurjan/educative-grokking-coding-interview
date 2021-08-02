/**
 * Finds a number that is duplicated in the array
 * @constructor
 * @param {Array.<number>} arr - array (1 to n)
 */
const findTheDuplicateNumber = (arr) => {
  let i = 0

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (i !== correctIndex) {
      if (arr[i] === arr[correctIndex]) {
        return arr[i]
      } else {
        ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
      }
    } else {
      i++
    }
  }

  return -1
}

module.exports = findTheDuplicateNumber
