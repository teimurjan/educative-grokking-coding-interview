const { MedianStream } = require("../../../utils")

/**
 * Returns an array of all the sub arrays' medians
 * @constructor
 * @param {Array.<number>} arr - array
 * @param {number} k - sliding window size
 */
const slidingWindowMedian = (arr, k) => {
  const stream = new MedianStream()
  const result = []

  arr.forEach((num, i) => {
    if (i >= k) {
      result.push(stream.getMedian())
      stream.remove(arr[i - k])
    }

    stream.insert(num)
  })

  result.push(stream.getMedian())

  return result
}

module.exports = slidingWindowMedian
