const { LinkedListNode } = require("../../../utils")

/**
 * Reverses a linked list (recursively)
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const reverseLinkedList = (head) => {
  let current = head
  let prev = null

  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

module.exports = reverseLinkedList
