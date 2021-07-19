/**
 * Returns the indicies of elements that sum up to target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target number
 */
const pairWithTargetSum = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    const sum = arr[left] + arr[right]
    if (sum < target) {
      left += 1
    } else if (sum > target) {
      right -= 1
    } else {
      return [left, right]
    }
  }

  return [-1, -1]
}

module.exports = pairWithTargetSum
