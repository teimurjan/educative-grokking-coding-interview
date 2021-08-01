/**
 * Finds elements that sum up to target and adds to array
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target number
 * @param {number} left - leftmost index
 * @param {Array.<Array.<number>>} triplets - array of triplets
 */
const findPair = (arr, target, left, triplets) => {
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum === target) {
      triplets.push([-target, arr[left], arr[right]])
      left += 1
      right -= 1

      // skip duplicates
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1
      }
    } else if (target > sum) {
      left += 1
    } else {
      right -= 1
    }
  }
}

/**
 * Returns all unique triplets that adds up to zero
 * @constructor
 * @param {Array.<number>} arr - array
 */
const tripletSumToZero = (arr) => {
  arr = arr.sort((a, b) => a - b)

  const triplets = []

  arr.forEach((element, i) => {
    if (!(i > 0 && element === arr[i - 1])) {
      findPair(arr, -element, i + 1, triplets)
    }
  })

  return triplets
}

module.exports = tripletSumToZero
