/**
 * Finds a number that is duplicated and a number that is missing
 * @constructor
 * @param {Array.<number>} arr - array (1 to n)
 */
const findTheCorruptPaor = (arr) => {
  let i = 0

  let duplicatedNumber

  while (i < arr.length) {
    const correctIndex = arr[i] - 1
    if (i !== correctIndex && arr[i] !== arr[correctIndex]) {
      ;[arr[i], arr[correctIndex]] = [arr[correctIndex], arr[i]]
    } else {
      i++
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 !== i) {
      return [arr[i], i + 1]
    }
  }

  return [-1, -1]
}

module.exports = findTheCorruptPaor
