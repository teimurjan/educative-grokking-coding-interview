class Interval {
  constructor(start, end) {
    this.start = start
    this.end = end
  }

  toJSON() {
    return [this.start, this.end]
  }
}

module.exports = Interval
