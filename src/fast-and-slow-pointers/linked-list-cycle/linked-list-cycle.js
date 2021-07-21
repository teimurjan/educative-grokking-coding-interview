const { LinkedListNode } = require("../../utils")

/**
 * Returns true if the linked list has a cycle
 * @constructor
 * @param {LinkedListNode} head - string
 */
const linkedListCycle = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if (slow === fast) {
      return true
    }
  }

  return false
}

module.exports = linkedListCycle
