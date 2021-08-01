const { Interval } = require("../../utils")

module.exports = [
  {
    input: [
      [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
      [new Interval(2, 3), new Interval(5, 7)],
    ],
    output: [new Interval(2, 3), new Interval(5, 6), new Interval(7, 7)],
  },
  {
    input: [
      [new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)],
      [new Interval(5, 10)],
    ],
    output: [new Interval(5, 7), new Interval(9, 10)],
  },
]
