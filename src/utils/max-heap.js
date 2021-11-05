const Heap = require("./heap")

class MaxHeap extends Heap {
  constructor() {
    super((a, b) => (a < b ? 1 : -1))
  }
}

module.exports = MaxHeap
