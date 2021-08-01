const { Interval, doIntervalsOverlap } = require("../../../utils")

/**
 * Inserts an interval and merges correspondingly
 * @constructor
 * @param {Array.<Interval>} intervals - array of intervals
 * @param {Interval} newInterval - array of intervals
 */
const insertInterval = (intervals, newInterval) => {
  const result = []

  let i = 0
  while (i < intervals.length) {
    if (doIntervalsOverlap(newInterval, intervals[i])) {
      let merged = newInterval
      while (i < intervals.length && doIntervalsOverlap(merged, intervals[i])) {
        merged = new Interval(
          Math.min(merged.start, intervals[i].start),
          Math.max(merged.end, intervals[i].end)
        )

        i++
      }
      result.push(merged)
    } else {
      result.push(new Interval(intervals[i].start, intervals[i].end))

      i++
    }
  }

  return result
}

module.exports = insertInterval
