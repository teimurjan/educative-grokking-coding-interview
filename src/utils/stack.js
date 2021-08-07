const LinkedListNode = require("./linked-list-node")

class Stack {
  constructor() {
    this.head = null
    this.length = 0
  }

  enqueue(value) {
    const node = new LinkedListNode(value)
    if (this.length > 0) {
      node.next = this.head
    }

    this.head = node

    this.length++
  }

  pop() {
    if (this.length > 0) {
      const value = this.head.value
      this.length--
      this.head = this.head.next
      return value
    } else {
      throw new Error("Stack is empty")
    }
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

module.exports = Stack
