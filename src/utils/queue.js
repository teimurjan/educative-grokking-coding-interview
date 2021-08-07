const DoublyLinkedListNode = require("./doubly-linked-list-node")

class Queue {
  constructor() {
    this.head = null
    this.last = null
    this.length = 0
  }

  push(value) {
    const node = new DoublyLinkedListNode(value)
    if (this.length === 0) {
      this.head = node
      this.last = node
    } else {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }

    this.length++
  }

  pop() {
    if (this.length === 0) {
      throw new Error("Queue is empty")
    }

    const poppedValue = this.last.value

    if (this.length === 1) {
      ;[this.head, this.last] = [null, null]
    } else {
      this.last = this.last.prev
      this.last.next = null
    }

    this.length--

    return poppedValue
  }

  toJSON() {
    let current = this.head
    const arr = []
    while (current) {
      arr.push(current.value)
      current = current.next
    }

    return arr
  }
}

module.exports = Queue
