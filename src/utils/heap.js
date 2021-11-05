const getParentNodeIndex = (index) => Math.floor(index / 2)

// https://blog.bitsrc.io/implementing-heaps-in-javascript-c3fbf1cb2e65
class Heap {
  constructor(comparator) {
    this.heap = [null]
    this.comparator = comparator
  }

  size() {
    // -1 because the first element is null
    return this.heap.length - 1
  }

  peak() {
    return this.heap[1]
  }

  push(node) {
    this.heap.push(node)

    /* Finding the correct position for the new node */
    if (this.heap.length > 1) {
      let currentIndex = this.heap.length - 1

      /* Traversing up the parent node until the currentIndex node is greater/smaller than the parent (currentIndex/2) */
      while (
        currentIndex > 1 &&
        this.comparator(
          this.heap[getParentNodeIndex(currentIndex)],
          this.heap[currentIndex]
        ) === 1
      ) {
        /* Swapping the two nodes by using the ES6 destructuring syntax*/
        ;[
          this.heap[getParentNodeIndex(currentIndex)],
          this.heap[currentIndex],
        ] = [
          this.heap[currentIndex],
          this.heap[getParentNodeIndex(currentIndex)],
        ]

        currentIndex = getParentNodeIndex(currentIndex)
      }
    }
  }

  pop() {
    let peak = this.peak()

    /* 
      When there are more than two elements in the array,
      we put the right most element at the first position
      and start comparing nodes with the child nodes
    */
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1]
      this.heap.splice(this.heap.length - 1)

      if (this.heap.length === 3) {
        if (this.comparator(this.heap[1], this.heap[2]) === 1) {
          ;[this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
        }

        return peak
      }

      let currentIndex = 1
      let leftChildIndex = currentIndex * 2
      let rightChildIndex = currentIndex * 2 + 1

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.comparator(this.heap[currentIndex], this.heap[leftChildIndex]) ===
          1 ||
          this.comparator(
            this.heap[currentIndex],
            this.heap[rightChildIndex]
          ) === 1)
      ) {
        if (
          this.comparator(
            this.heap[leftChildIndex],
            this.heap[rightChildIndex]
          ) === -1
        ) {
          ;[this.heap[currentIndex], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[currentIndex],
          ]
          currentIndex = leftChildIndex
        } else {
          ;[this.heap[currentIndex], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[currentIndex],
          ]
          currentIndex = rightChildIndex
        }

        leftChildIndex = currentIndex * 2
        rightChildIndex = currentIndex * 2 + 1
      }
    } else if (this.heap.length === 2) {
      /* If there are only two elements in the array, we directly splice out the first element */
      this.heap.splice(1, 1)
    } else {
      return null
    }

    return peak
  }
}

module.exports = Heap
