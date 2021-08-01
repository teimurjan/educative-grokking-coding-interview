const { Interval, doIntervalsOverlap } = require("../../utils")

/**
 * Returns true if there is no intervals overlaps
 * @constructor
 * @param {Array.<Interval>} intervals - array of intervals
 */
const intervalsIntersection = (intervals) => {
  intervals.sort((a, b) => a.start - b.start)

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i].start < intervals[i - 1].end) {
      return false
    }
  }

  return true
}

module.exports = intervalsIntersection
