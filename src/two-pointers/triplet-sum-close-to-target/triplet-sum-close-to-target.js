/**
 * Finds the triplet sum closest to target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} element - first element in sum
 * @param {number} target - target number
 * @param {number} left - leftmost index
 * @param {number} closestDiff - closest difference
 */
const findPair = (arr, element, target, left, closestDiff) => {
  let right = arr.length - 1
  while (left < right) {
    const sum = arr[left] + arr[right] + element

    const currDiff = Math.abs(target - sum)
    if (closestDiff > currDiff) {
      closestDiff = currDiff
      left += 1
    } else {
      right -= 1
    }
  }

  return closestDiff
}

/**
 * Returns the sum of triplet that adds up close to target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target
 */
const tripletSumCloseToTarget = (arr, target) => {
  arr = arr.sort((a, b) => a - b)

  let closestDiff = Number.MAX_VALUE
  arr.forEach((element, i) => {
    if (!(i > 0 && element === arr[i - 1])) {
      closestDiff = findPair(arr, element, target, i + 1, closestDiff)
    }
  })

  return target - closestDiff
}

module.exports = tripletSumCloseToTarget
