/**
 * Returns the sorted array of squared elements from arr
 * @constructor
 * @param {Array.<number>} arr - array
 */
const squaringASortedArray = (arr) => {
  let left = 0
  let right = arr.length - 1
  let i = right

  const result = arr.map((_) => 0)
  while (left <= right) {
    if (Math.abs(arr[left]) < Math.abs(arr[right])) {
      result[i--] = arr[right] * arr[right]
      right -= 1
    } else {
      result[i--] = arr[left] * arr[left]
      left += 1
    }
  }

  return result
}

module.exports = squaringASortedArray
