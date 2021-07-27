const { Interval } = require("../../utils")

/**
 * Merges interval arrays
 * @constructor
 * @param {Array.<Interval>} intervals - array of intervals
 */
const mergeIntervals = (intervals) => {
  const result = []

  intervals
    .sort((a, b) => a.start - b.start)
    .forEach((interval) => {
      const lastIndex = result.length - 1
      const last = result[lastIndex]
      if (last && last.end > interval.start) {
        result[lastIndex].end = Math.max(last.end, interval.end)
      } else {
        result.push(new Interval(interval.start, interval.end))
      }
    })

  return result
}

module.exports = mergeIntervals
