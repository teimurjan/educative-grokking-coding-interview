const swap = (arr, i, j) => {
  const temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}

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
      swap(arr, i, left)
      left++
      i++
    } else if (arr[i] === 2) {
      swap(arr, i, right)
      right--
    } else {
      i++
    }
  }

  return arr
}

module.exports = dutchNationalFlagProblem
