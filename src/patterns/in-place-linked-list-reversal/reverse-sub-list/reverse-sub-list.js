const { LinkedListNode } = require("../../../utils")
const reverseLinkedList = require("../reverse-linked-list")

/**
 * Reverses sub-list in a linked list
 * @constructor
 * @param {LinkedListNode} head - linked list head
 * @param {number} p - sub list start index + 1
 * @param {number} q - sub list end index + 1
 */
const reverseSubList = (head, p, q) => {
  let i = 0
  let current = head
  let predecessor = null

  while (current) {
    if (i === p - 2) {
      predecessor = current
    }

    if (i === q - 1) {
      const successor = current.next
      current.next = null
      predecessor.next = reverseLinkedList(predecessor.next)

      let subListEnd = predecessor.next
      while (subListEnd.next) {
        subListEnd = subListEnd.next
      }
      subListEnd.next = successor
      break
    }

    current = current.next
    i++
  }

  return head
}

module.exports = reverseSubList
