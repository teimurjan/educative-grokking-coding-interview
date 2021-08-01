const { Interval } = require("../../utils")

module.exports = [
  {
    input: [[new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]],
    output: 2,
  },
  {
    input: [[new Interval(6, 7), new Interval(2, 4), new Interval(8, 12)]],
    output: 1,
  },
  {
    input: [[new Interval(1, 4), new Interval(2, 3), new Interval(3, 6)]],
    output: 2,
  },
  {
    input: [
      [
        new Interval(4, 5),
        new Interval(2, 3),
        new Interval(2, 4),
        new Interval(3, 5),
      ],
    ],
    output: 2,
  },
]
