/**
 * Finds number that is missing in the array
 * @constructor
 * @param {Array.<number>} arr - array (1 to n)
 */
const findAllMissingNumbers = (arr) => {
  let i = 0

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (i !== correctIndex && arr[i] !== arr[correctIndex]) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  return arr.reduce(
    (acc, num, i) => (num - 1 !== i ? [...acc, i + 1] : acc),
    []
  )
}

module.exports = findAllMissingNumbers
