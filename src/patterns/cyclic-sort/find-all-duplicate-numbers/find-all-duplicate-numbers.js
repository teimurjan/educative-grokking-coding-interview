/**
 * Finds all number that are duplicated in the array
 * @constructor
 * @param {Array.<number>} arr - array (1 to n)
 */
const findAllDuplicateNumbers = (arr) => {
  let i = 0

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (arr[i] !== arr[correctIndex]) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  return arr.filter((num, i) => num - 1 !== i)
}

module.exports = findAllDuplicateNumbers
