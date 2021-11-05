const { MinHeap, MaxHeap } = require("../../../utils")

class FindTheMedianOfNumberStream {
  constructor() {
    this.largeNums = new MinHeap()
    this.smallNums = new MaxHeap()
  }

  insertNum(num) {
    if (this.smallNums.size() === 0 || this.smallNums.peak() >= num) {
      this.smallNums.push(num)
    } else {
      this.largeNums.push(num)
    }

    // largeNums.size() will always be >= smallNums.size()
    if (this.smallNums.size() > this.largeNums.size()) {
      this.largeNums.push(this.smallNums.pop())
    } else if (this.smallNums.size() + 1 < this.largeNums.size()) {
      this.smallNums.push(this.largeNums.pop())
    }
  }

  findMedian() {
    if (this.smallNums.size() === this.largeNums.size()) {
      return (this.largeNums.peak() + this.smallNums.peak()) / 2
    }

    return this.largeNums.peak()
  }
}

module.exports = FindTheMedianOfNumberStream
