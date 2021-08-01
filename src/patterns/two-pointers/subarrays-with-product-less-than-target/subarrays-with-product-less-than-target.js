/**
 * Returns the contiguous subarrays with the product less than target
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} target - target
 */
const subarraysWithProductLessThanTarget = (arr, target) => {
  const result = []

  let left = 0
  let product = 1

  arr.forEach((value, right) => {
    product *= value

    while (product >= target && left < arr.length) {
      product /= arr[left]
      left += 1
    }

    for (let i = right; i > left - 1; i--) {
      result.push(arr.slice(i, right + 1))
    }
  })

  return result
}

module.exports = subarraysWithProductLessThanTarget
