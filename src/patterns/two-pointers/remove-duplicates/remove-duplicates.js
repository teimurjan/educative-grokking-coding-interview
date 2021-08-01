/**
 * Returns count of elements in the array without duplicates
 * @constructor
 * @param {Array.<number>} arr - array
 */
const removeDuplicates = (arr) => {
  let left = 1

  let right = 1
  while (right < arr.length) {
    if (arr[left - 1] !== arr[right]) {
      arr[left] = arr[right]
      left += 1
    }
    right += 1
  }

  return left
}

module.exports = removeDuplicates
