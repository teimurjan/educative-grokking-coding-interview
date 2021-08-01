const { Interval } = require("../../utils")

/**
 * Returns true if the intervals overlap, otherwise false
 * @constructor
 * @param {Interval} interval1 - interval #1
 * @param {Interval} interval2 - interval #2
 */
const hasOverlap = (interval1, interval2) => {
  return (
    /**
     * #1:    |----|----|
     * #2: |----|----|
     */
    (interval1.start >= interval2.start && interval1.start < interval2.end) ||
    /**
     * #1: |----|----|
     * #2:    |----|----|
     */
    (interval2.start >= interval1.start && interval2.start < interval1.end)
  )
}

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
    if (hasOverlap(newInterval, intervals[i])) {
      let merged = newInterval
      while (i < intervals.length && hasOverlap(merged, intervals[i])) {
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
