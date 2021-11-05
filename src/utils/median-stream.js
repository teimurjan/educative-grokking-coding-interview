const MinHeap = require("./min-heap")
const MaxHeap = require("./max-heap")

class MedianStream {
  constructor() {
    this.largeNums = new MinHeap()
    this.smallNums = new MaxHeap()
  }

  insert(num) {
    if (this.smallNums.size() === 0 || this.smallNums.peak() >= num) {
      this.smallNums.push(num)
    } else {
      this.largeNums.push(num)
    }

    this._balance()
  }

  remove(num) {
    if (!this.smallNums.remove(num)) {
      this.largeNums.remove(num)
    }

    this._balance()
  }

  getMedian() {
    if (this.smallNums.size() === this.largeNums.size()) {
      return (this.largeNums.peak() + this.smallNums.peak()) / 2
    }

    return this.largeNums.peak()
  }

  _balance() {
    // largeNums.size() will always be >= smallNums.size()
    if (this.smallNums.size() > this.largeNums.size()) {
      this.largeNums.push(this.smallNums.pop())
    } else if (this.smallNums.size() + 1 < this.largeNums.size()) {
      this.smallNums.push(this.largeNums.pop())
    }
  }
}

module.exports = MedianStream
