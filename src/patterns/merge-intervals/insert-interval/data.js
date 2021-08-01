const { Interval } = require("../../../utils")

module.exports = [
  {
    input: [
      [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
      new Interval(4, 6),
    ],
    output: [new Interval(1, 3), new Interval(4, 7), new Interval(8, 12)],
  },
  {
    input: [
      [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
      new Interval(4, 10),
    ],
    output: [new Interval(1, 3), new Interval(4, 12)],
  },
  {
    input: [[new Interval(2, 3), new Interval(5, 7)], new Interval(1, 4)],
    output: [new Interval(1, 4), new Interval(5, 7)],
  },
]
