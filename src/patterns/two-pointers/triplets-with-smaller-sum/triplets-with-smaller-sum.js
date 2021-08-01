/**
 * Returns the count of triplets that adds up to a number less than target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target
 */
const tripletsWithSmallerSum = (arr, target) => {
  arr = arr.sort((a, b) => a - b)

  let tripletsCount = 0
  arr.forEach((element, i) => {
    let left = i + 1
    let right = arr.length - 1
    while (left < right) {
      const sum = element + arr[left] + arr[right]
      if (sum < target) {
        tripletsCount += right - left
        left += 1
      } else {
        right -= 1
      }
    }
  })

  return tripletsCount
}

module.exports = tripletsWithSmallerSum
