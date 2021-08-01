const Interval = require("./interval")

/**
 * Returns true if the intervals overlap, otherwise false
 * @constructor
 * @param {Interval} interval1 - interval #1
 * @param {Interval} interval2 - interval #2
 */
const doIntervalsOverlap = (interval1, interval2) => {
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

module.exports = doIntervalsOverlap
