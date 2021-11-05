const Heap = require("./heap")

class MinHeap extends Heap {
  constructor() {
    super((a, b) => (a > b ? 1 : -1))
  }
}

module.exports = MinHeap
