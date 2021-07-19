/**
 * Returns the sum of triplet that adds up close to target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target
 */
const tripletSumCloseToTarget = (arr, target) => {
  arr = arr.sort((a, b) => a - b)

  let smallestDiff = Number.MAX_VALUE

  arr.forEach((element, i) => {
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      const currDiff = target - element - arr[left] - arr[right]
      if (currDiff === 0) {
        return target - currDiff
      }

      if (
        Math.abs(currDiff) < Math.abs(smallestDiff) ||
        (Math.abs(currDiff) === Math.abs(smallestDiff) &&
          currDiff > smallestDiff)
      ) {
        smallestDiff = currDiff
      }

      if (currDiff > 0) {
        left += 1
      } else {
        right -= 1
      }
    }
  })

  return target - smallestDiff
}

module.exports = tripletSumCloseToTarget
