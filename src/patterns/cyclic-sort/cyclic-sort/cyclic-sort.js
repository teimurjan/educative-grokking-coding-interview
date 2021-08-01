/**
 * Sorts the array in-place
 * @constructor
 * @param {Array.<number>} arr - array (1 to n)
 */
const cyclicSort = (arr) => {
  let i = 0

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (i !== correctIndex) {
      ;[arr[correctIndex], arr[i]] = [arr[i], arr[correctIndex]]
    } else {
      i++
    }
  }

  return arr
}

module.exports = cyclicSort
