/**
 * Finds a number that is missing in the array
 * @constructor
 * @param {Array.<number>} arr - array (0 to n)
 */
const findTheMissingNumber = (arr) => {
  arr.push(-1)

  let i = 0

  while (i < arr.length) {
    if (arr[i] === -1) {
      i++
      continue
    }

    const correctIndex = arr[i]
    if (i !== correctIndex) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  return arr.findIndex((num, i) => num !== i)
}

module.exports = findTheMissingNumber
