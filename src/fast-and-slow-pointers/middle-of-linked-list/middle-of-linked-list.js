const { LinkedListNode } = require("../../utils")

/**
 * Returns the value of mid node of a linked list
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const middleOfLinkedList = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow.value
}

module.exports = middleOfLinkedList
