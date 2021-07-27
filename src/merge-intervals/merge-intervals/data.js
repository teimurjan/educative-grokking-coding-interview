const { Interval } = require("../../utils")

module.exports = [
  {
    input: [[new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]],
    output: [new Interval(1, 5), new Interval(7, 9)],
  },
  {
    input: [[new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]],
    output: [new Interval(2, 4), new Interval(5, 9)],
  },
  {
    input: [[new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]],
    output: [new Interval(1, 6)],
  },
]
