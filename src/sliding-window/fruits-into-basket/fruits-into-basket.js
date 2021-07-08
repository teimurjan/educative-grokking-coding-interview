/**
 * Returns maximum number of fruits in each of 2 baskets
 * @constructor
 * @param {Array.<string>} arr - string
 */
const fruitsIntoBasket = (arr) => {
  const currentFruits = {}
  let maxLength = 0
  let start = 0
  let end = 0

  while (end < arr.length) {
    if (arr[end] in currentFruits) {
      currentFruits[arr[end]] += 1
    } else if (Object.keys(currentFruits).length === 2) {
      maxLength = Math.max(end - start, maxLength)

      while (Object.keys(currentFruits).length === 2) {
        if (currentFruits[arr[start]] === 1) {
          delete currentFruits[arr[start]]
        } else {
          currentFruits[arr[start]] -= 1
        }

        start += 1
      }

      currentFruits[arr[end]] = 1
    } else {
      currentFruits[arr[end]] = 1
    }

    end += 1
  }

  maxLength = Math.max(end - start, maxLength)

  return maxLength
}

module.exports = fruitsIntoBasket
