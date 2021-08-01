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
    (interval1.start >= interval2.start && interval1.start <= interval2.end) ||
    /**
     * #1: |----|----|
     * #2:    |----|----|
     */
    (interval2.start >= interval1.start && interval2.start <= interval1.end)
  )
}

/**
 * Returns the array of intersected intervals
 * @constructor
 * @param {Array.<Interval>} intervals1 - 1st array of intervals
 * @param {Interval} intervals2 - 2nd array of intervals
 */
const intervalsIntersection = (intervals1, intervals2) => {
  const result = []

  let i = 0
  let j = 0
  while (i < intervals1.length && j < intervals2.length) {
    if (hasOverlap(intervals1[i], intervals2[j])) {
      result.push(
        new Interval(
          Math.max(intervals1[i].start, intervals2[j].start),
          Math.min(intervals1[i].end, intervals2[j].end)
        )
      )
    }

    if (intervals1[i].end < intervals2[j].end) {
      i++
    } else {
      j++
    }
  }

  return result
}

module.exports = intervalsIntersection
