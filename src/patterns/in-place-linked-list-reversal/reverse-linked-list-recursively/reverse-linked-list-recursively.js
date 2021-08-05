const { LinkedListNode } = require("../../../utils")

/**
 * Reverses a linked list (recursively)
 * @constructor
 * @param {LinkedListNode} head - linked list head
 * @param {LinkedListNode} [prev=null] - prev node
 */
const reverseLinkedListRecursively = (head, prev = null) => {
  if (!head) {
    return prev
  }

  const newHead = reverseLinkedListRecursively(head.next, head)
  head.next = prev

  return newHead
}

module.exports = reverseLinkedListRecursively
